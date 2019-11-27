const resolvers = {
	Query: {

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
};

export {
	resolvers
}
