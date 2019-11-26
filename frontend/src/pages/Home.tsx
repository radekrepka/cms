import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import ReactLoading from 'react-loading';
// import './Home.css';
//
const Home: React.FC = () => {
	const [isLoading] = useState<boolean>(true);

	if (isLoading) {
		// return <ReactLoading className='loading' type={'bubbles'} color={'#339966'} height={'10%'} width={'10%'}/>;
	}

	return (
		<div>
			<section className="content">
				<div className="row frontPage">
					<div className="col-1">
                            <span className="text-success">
                                    {/*{frontPage.dateAdd}*/}
                            </span>
					</div>
					<div className="col-8">
						{/*<Link to={"/article/" + frontPage._id}>*/}
						{/*    <img src="" />*/}
						{/*</Link>*/}
						<div className="mt-5">
							{/*<Link to={"/article/" + frontPage._id}>*/}
							{/*    <h1>*/}
							{/*        {frontPage.title}*/}
							{/*    </h1>*/}
							{/*</Link>*/}
						</div>
					</div>
				</div>
				<div className="mt-5">
					<div className="row">
						<div className="col-8 offset-1">
							<h2>Stalo se</h2>
							<hr/>
						</div>
					</div>
				</div>
				<div className="article-list">
					{/*TODO {articles.map(article =>*/}
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
									{/*    <img src="" className="img-fluid" />*/}
									{/*</Link>*/}
								</div>
								<div className="col-9">
									{/*<Link to={"/article/" + article._id}>*/}
									{/*    <h3>*/}
									{/*        {article.title}*/}
									{/*    </h3>*/}
									{/*</Link>*/}
								</div>
							</div>
						</div>
					</div>
					{/*)}*/}
				</div>
			</section>
		</div>
	);
};

export default Home;
