// @ts-ignore
import GraphQLDateTime from 'graphql-type-datetime';
import articles from '../exampleData/articles.json';
import sections from '../exampleData/sections.json';

interface ArticleArguments {
	readonly id: number;
}

interface SectionArguments {
	readonly url: string;
}

interface Article {
	readonly id: number;
	readonly title: string;
	readonly body: string;
	readonly image: string;
	readonly frontPage: boolean;
	readonly created_date: string;
}

interface Section {
	readonly id: number;
	readonly name: string;
	readonly url: string;
	readonly articles: Article[];
}

interface SectionData {
	readonly id: number;
	readonly name: string;
	readonly url: string;
	readonly articles: number[];
}

const resolvers = {
	DateTime: GraphQLDateTime,
	Query: {
		articles: (parent: unknown, args: unknown) => {
			return articles;
		},
		article: (parent: unknown, args: ArticleArguments) => {
			if (args.id != null && articles[args.id] != null) {
				return articles[args.id];
			}

			return null;
		},
		sections: (parent: unknown, args: unknown) => {
			return sections;
		},
		section: (parent: unknown, args: SectionArguments) => {
			const results = sections.filter((section: SectionData) => {
				return section.url == args.url;
			});

			if (results.length > 0) {
				return results[0];
			}

			return null;
		}
	},
	Node: {
		__resolveType: (node: object): string => {
			return typeof node;
		},
	},
	NodeEdge: {
		__resolveType: (nodeEdge: object): string => {
			return typeof nodeEdge;
		},
	},
	NodeConnection: {
		__resolveType: (nodeConnection: object): string => {
			return typeof nodeConnection;
		},
	},
	Article: {

	},
	ArticleEdge: {
		node: (edge: Article) => edge,
		cursor: (edge: Article) => edge.id,
	},
	ArticleConnection: {
		edges: (articles: Article[]) => articles,
		pageInfo: () => ({
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null,
			endCursor: null,
		}),
	},
	Section: {
		id: (section: any) => {console.log(section);return section.id},
		articles: (section: SectionData) => {
			console.log(section);
			return section.articles.map((id: number) => {
				return articles[id];
			});
		}
	},
	SectionEdge: {
		node: (edge: Section) => edge,
		cursor: (edge: Section) => edge.id,
	},
	SectionConnection: {
		edges: (sections: Section[]) => sections,
		pageInfo: () => ({
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null,
			endCursor: null,
		}),
	},
};

export {
	resolvers
}
