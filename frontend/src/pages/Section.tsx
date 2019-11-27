import React from 'react';
import Loader from '../components/Loader';
import {useQuery} from '@apollo/react-hooks';
import {GET_SECTION} from '../graphql/queries/sections';
import {getSection, getSectionVariables} from '../graphql/queries/__generated__/getSection';
import ArticleList from '../components/ArticleList';

export interface SectionProps {
	match: {
		params: {
			sectionUrl: string
		}
	}
}

const Section: React.FC<SectionProps> = ({ match }) => {
	const { loading, error, data } = useQuery<getSection, getSectionVariables>(GET_SECTION, {
		variables: {
			url: match.params.sectionUrl
		},
	});

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error!</div>;
	}

	let articleList;

	if (data != null && data.section != null && data.section.articles != null) {
		articleList = <ArticleList articles={data.section.articles} />;
	} else {
		articleList = (
			<div>
				No articles.
			</div>
		);
	}

	return (
		<section className="content">
			<div className="row">
				<div className="col-12">
					<h1>{data && data.section && data.section.name}</h1>
				</div>
				<div className="col-12 mt-2">
					{articleList}
				</div>
			</div>
		</section>
	)
};

export default Section;
