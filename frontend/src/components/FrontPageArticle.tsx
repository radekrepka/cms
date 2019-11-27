import React from 'react';
import {getArticles_articles_edges} from '../graphql/queries/__generated__/getArticles';
import {getReadableDateTime} from '../utils';
import {Link} from 'react-router-dom';

export interface FrontPageArticleProps {
	article: getArticles_articles_edges | null;
}

const FrontPageArticle: React.FC<FrontPageArticleProps> = ({ article }) => {

	if (article == null) {
		return <React.Fragment></React.Fragment>;
	}

	return (
		<div className="row frontPage">
			<div className="col-1">
				<span className="text-success article-create-date">
					{getReadableDateTime(article.node.created_date)}
				</span>
			</div>
			<div className="col-8">
				{article.node.image != null && article.node.title && (
					<Link to={"/article/" + article.node.id}>
						<img src={article.node.image} alt={article.node.title} />
					</Link>
				)}
				<div className="mt-5">
					<Link to={"/article/" + article.node.id}>
						<h1>
							{article.node.title}
						</h1>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FrontPageArticle;
