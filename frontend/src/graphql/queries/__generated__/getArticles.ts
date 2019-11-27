/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getArticles
// ====================================================

export interface getArticles_articles_edges_node {
  __typename: "Article";
  id: number;
  title: string | null;
  image: string | null;
  frontPage: boolean | null;
  created_date: any | null;
}

export interface getArticles_articles_edges {
  __typename: "ArticleEdge";
  node: getArticles_articles_edges_node;
}

export interface getArticles_articles {
  __typename: "ArticleConnection";
  edges: getArticles_articles_edges[];
}

export interface getArticles {
  articles: getArticles_articles | null;
}
