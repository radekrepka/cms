import React, {useState} from 'react';
import Loader from '../components/Loader';

const Article: React.FC = () => {
	const [isLoading] = useState<boolean>(true);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<section className="content">
			<div className="row">
				<div className="col-10">
					<h1>
						{/*{article.title}*/}
					</h1>
					<div className="mt-4">
						{/*<img src="" />*/}
					</div>
					<div className="mt-1">
						<p className="text-secondary">
							{/*{article.imageText}*/}
						</p>
					</div>
					<div>
						<p>
							{/*{article.body}*/}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Article;
