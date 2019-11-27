import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_ARTICLES} from '../graphql/queries/articles';
import {getArticles} from '../graphql/queries/__generated__/getArticles';
import Loader from '../components/Loader';
import ArticleList from '../components/ArticleList';
import FrontPageArticle from '../components/FrontPageArticle';
import './Home.css';

const Home: React.FC = () => {
	const { loading, error, data } = useQuery<getArticles>(GET_ARTICLES);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error!</div>;
	}

	let frontPageArticle = null;

	if (data != null && data.articles != null) {
		const frontPageArticles = data.articles.edges.filter((article) => {
			return article.node.frontPage;
		});

		frontPageArticle = frontPageArticles.length > 0 ? frontPageArticles[0] : null;
	}

	return (
		<div>
			<section className="content">
				<FrontPageArticle article={frontPageArticle} />
				<div className="mt-5">
					<div className="row">
						<div className="col-8 offset-1">
							<h2>Stalo se</h2>
							<hr/>
						</div>
					</div>
				</div>
				{data != null && data.articles != null &&
					<ArticleList articles={data.articles} />
				}
			</section>
		</div>
	);
};

export default Home;
