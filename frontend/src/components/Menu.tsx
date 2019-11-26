import React, {useCallback, useState} from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
	const [navCollapsed, setNavColapsed] = useState<boolean>(true);

	const onToggleNav = useCallback(() => {
		setNavColapsed(state => !state);
	}, []);

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
					{/*{sections.map(section =>*/}
					{/*	<li className="nav-item">*/}
					{/*		<Link to={"/section/" + section.url} className="nav-link">*/}
					{/*			{section.name}*/}
					{/*		</Link>*/}
					{/*	</li>*/}
					{/*)}*/}
				</ul>
			</div>
		</div>
	)
};

export default Menu;
