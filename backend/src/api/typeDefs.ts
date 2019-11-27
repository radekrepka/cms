import {gql} from 'apollo-server-express';
import {DocumentNode} from 'graphql';

const typeDefs: DocumentNode = gql`
  type Query { 
	
  }

  interface Node {
    id: Int!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  interface NodeEdge {
    node: Node!
    cursor: String!
  }

  interface NodeConnection {
    edges: [NodeEdge!]!
    pageInfo: PageInfo!
  }
`;

export {
	typeDefs
}
