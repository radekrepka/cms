// @ts-ignore
import GraphQLDateTime from 'graphql-type-datetime';
import articles from '../exampleData/articles.json';

interface ArticleArguments {
	readonly id: number;
}

interface Article {
	readonly id: number;
	readonly title: string;
	readonly body: string;
	readonly image: string;
	readonly frontPage: boolean;
	readonly created_date: string;
}

const resolvers = {
	DateTime: GraphQLDateTime,
	Query: {
		articles: (parent: unknown, args: unknown) => {
			return articles;
		},
		article: (parent: unknown, args: ArticleArguments) => {
			if (args.id != null && args.id < articles.length) {
				return articles[args.id];
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
};

export {
	resolvers
}
