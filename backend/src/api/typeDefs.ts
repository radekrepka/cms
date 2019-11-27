import {gql} from 'apollo-server-express';
import {DocumentNode} from 'graphql';

const typeDefs: DocumentNode = gql`
  scalar DateTime
  
  type Query { 
	articles: ArticleConnection
	article(id: Int!): Article
    
    sections: SectionConnection
    section(url: String!): Section
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
    created_date: DateTime
  }

  type ArticleEdge implements NodeEdge {
    node: Article!
    cursor: String!
  }

  type ArticleConnection implements NodeConnection {
    edges: [ArticleEdge!]!
    pageInfo: PageInfo!
  }

  input SectionInput {
    url: String!
  }

  type Section implements Node {
	id: Int!
    name: String
	url: String
	articles: ArticleConnection
  }

  type SectionEdge implements NodeEdge {
    node: Section!
    cursor: String!
  }

  type SectionConnection implements NodeConnection {
    edges: [SectionEdge!]!
    pageInfo: PageInfo!
  }
`;

export {
	typeDefs
}
