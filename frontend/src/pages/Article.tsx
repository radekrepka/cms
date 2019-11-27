import React from 'react';
import { useQuery } from 'react-apollo';
import Loader from '../components/Loader';
import { GET_ARTICLE } from '../graphql/queries/articles';
import NotFound from './NotFound';
import { getArticle, getArticleVariables } from '../graphql/queries/__generated__/getArticle';

interface ArticleProps {
	match: {
		params: {
			id: string
		}
	}
}

const Article: React.FC<ArticleProps> = ({ match }) => {
	const id = parseInt(match.params.id, 10);

	const { loading, error, data } = useQuery<getArticle, getArticleVariables>(GET_ARTICLE, {
		variables: {
			id
		},
	});

	if (loading) {
		return <Loader />;
	}

	if (error) {
		let content = <div>Error!</div>;

		if (isNaN(id)) {
			return <NotFound />;
		}

		return content;
	}

	if (data == null || data.article == null) {
		return <NotFound />;
	}

	const { article } = data;

	return (
		<section className="content">
			<div className="row">
				<div className="col-10">
					<h1>
						{article.title}
					</h1>
					<div className="mt-4">
						{(article.image != null && article.title != null) && (
							<img src={article.image} alt={article.title} />
						)}
					</div>
					{/*<div className="mt-1">*/}
					{/*	<p className="text-secondary">*/}
					{/*		{article.imageText}*/}
					{/*	</p>*/}
					{/*</div>*/}
					<div>
						<p>
							{article.body}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Article;
