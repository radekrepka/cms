import {ApolloServer} from 'apollo-server-express';
import {createSchema} from './schemaFactory';

const create = (): ApolloServer => {
	const schema = createSchema();
	return new ApolloServer({
		schema
	});
};

export {
	create,
};
