import {makeExecutableSchema} from 'apollo-server-express';
import {GraphQLSchema} from 'graphql';
import {typeDefs} from './typeDefs';
import {resolvers} from './resolvers';

const createSchema = (): GraphQLSchema => {
	return makeExecutableSchema({
		typeDefs,
		resolvers,
	});
};

export {
	createSchema
};
