import React, {useCallback, useState} from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {getSections} from '../graphql/queries/__generated__/getSections';
import {GET_SECTIONS} from '../graphql/queries/sections';
import Loader from './Loader';
import './Menu.css';

const Menu: React.FC = () => {
	const [navCollapsed, setNavColapsed] = useState<boolean>(true);

	const onToggleNav = useCallback(() => {
		setNavColapsed(state => !state);
	}, []);

	const { loading, error, data } = useQuery<getSections>(GET_SECTIONS);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error!</div>;
	}

	return (
		<div className="nav navbar-expand-md justify-content-center header-menu">
			<button
				aria-expanded='false'
				className='navbar-toggler collapsed'
				onClick={onToggleNav}
				type='button'
			>
				<span className="navbar-toggler-icon text-danger"></span>
			</button>
			<div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse justify-content-between align-items-center w-100'}>
				<ul className="navbar-nav mx-auto text-center">
					<li className="nav-item">
						<Link to={"/"} className="nav-link">
							Home
						</Link>
					</li>
					{data != null && data.sections != null && data.sections.edges.map(section =>
						<li className="nav-item" key={section.node.id}>
							<Link to={"/section/" + section.node.url} className="nav-link">
								{section.node.name}
							</Link>
						</li>
					)}
				</ul>
			</div>
		</div>
	)
};

export default Menu;
