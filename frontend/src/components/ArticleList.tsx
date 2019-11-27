import React from 'react';
import {Link} from 'react-router-dom';
import {getArticles_articles} from '../graphql/queries/__generated__/getArticles';
import {getReadableDateTime} from '../utils';
import './ArticleList.css';

export interface ArticleListProps {
	articles: getArticles_articles;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {

	if (articles.edges.length === 0) {
		return <div>No articles.</div>
	}

	return (
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
	);
};

export default ArticleList;
