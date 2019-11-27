import {gql} from 'apollo-server-express';
import {DocumentNode} from 'graphql';

const typeDefs: DocumentNode = gql`
  type Query { 
	articles: ArticleConnection
	article(id: Int): Article
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

  input ArticleInput {
    id: Int!
  }

  type Article implements Node {
    id: Int!
    title: String
    image: String
    body: String
    frontPage: Boolean
    created_date: String
  }

  type ArticleEdge implements NodeEdge {
    node: Article!
    cursor: String!
  }

  type ArticleConnection implements NodeConnection {
    edges: [ArticleEdge!]!
    pageInfo: PageInfo!
  }
`;

export {
	typeDefs
}
