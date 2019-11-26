import React, {useState} from 'react';
import Loader from '../components/Loader';

const Section: React.FC = () => {
	const [isLoading] = useState<boolean>(true);

	if (isLoading) {
		return <Loader />;
	}

	let articleList;

	// if (articles != null && articles.length > 0) {
		articleList = (
			<div className="article-list">
				{/*{articles.map(article =>*/}
					<div className="row mb-3">
						<div className="col-1">
                                        <span className="text-success">
                                                {/*{article.dateAdd}*/}
                                        </span>
						</div>
						<div className="col-8">
							<div className="row">
								<div className="col-3">
									{/*<Link to={"/article/" + article._id}>*/}
									{/*	<img src="" alt={article.title} />*/}
									{/*</Link>*/}
								</div>
								<div className="col-9">
									{/*<Link to={"/article/" + article._id}>*/}
									{/*	<h3>*/}
									{/*		{article.title}*/}
									{/*	</h3>*/}
									{/*</Link>*/}
								</div>
							</div>
						</div>
					</div>
				{/*)}*/}
			</div>
		);
	// } else {
	// 	articleList = (
	// 		<div>
	// 			Žádné články.
	// 		</div>
	// 	);
	// }

	return (
		<section className="content">
			{articleList}
		</section>
	)
};

export default Section;
