import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {GET_ARTICLES} from '../graphql/queries/articles';
import {getArticles} from '../graphql/queries/__generated__/getArticles';
import Loader from '../components/Loader';
import NotFound from './NotFound';
import './Home.css';
import {getReadableDateTime} from '../utils';

const Home: React.FC = () => {
	const { loading, error, data } = useQuery<getArticles>(GET_ARTICLES);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error!</div>;
	}

	if (data == null || data.articles == null || data.articles.edges.length === 0) {
		return <NotFound />;
	}

	const { articles } = data;

	const frontPageArticles = articles.edges.filter((article) => {
		return article.node.frontPage;
	});

	const frontPageArticle = frontPageArticles.length > 0 ? frontPageArticles[0] : null;

	return (
		<div>
			<section className="content">
				{frontPageArticle != null && (
					<div className="row frontPage">
						<div className="col-1">
								<span className="text-success article-create-date">
										{getReadableDateTime(frontPageArticle.node.created_date)}
								</span>
						</div>
						<div className="col-8">
							{frontPageArticle.node.image != null && frontPageArticle.node.title && (
							<Link to={"/article/" + frontPageArticle.node.id}>
								<img src={frontPageArticle.node.image} alt={frontPageArticle.node.title} />
							</Link>
							)}
							<div className="mt-5">
								<Link to={"/article/" + frontPageArticle.node.id}>
									<h1>
										{frontPageArticle.node.title}
									</h1>
								</Link>
							</div>
						</div>
					</div>
				)}
				<div className="mt-5">
					<div className="row">
						<div className="col-8 offset-1">
							<h2>Stalo se</h2>
							<hr/>
						</div>
					</div>
				</div>
				<div className="article-list">
					{articles.edges.map(article =>
					<div className="row mb-3" key={article.node.id}>
						<div className="col-1">
                        	<span className="text-success article-create-date">
                        	        {getReadableDateTime(article.node.created_date)}
                        	</span>
						</div>
						<div className="col-8">
							<div className="row">
								<div className="col-3">
									{article.node.image != null && article.node.title && (
										<Link to={"/article/" + article.node.id}>
											<img src={article.node.image} alt={article.node.title} />
										</Link>
									)}
								</div>
								<div className="col-9">
									<Link to={"/article/" + article.node.id}>
									    <h3>
									        {article.node.title}
									    </h3>
									</Link>
								</div>
							</div>
						</div>
					</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default Home;
