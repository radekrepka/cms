/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SectionWithArticlesData
// ====================================================

export interface SectionWithArticlesData_articles_edges_node {
  __typename: "Article";
  id: number;
  title: string | null;
  image: string | null;
  frontPage: boolean | null;
  created_date: any | null;
}

export interface SectionWithArticlesData_articles_edges {
  __typename: "ArticleEdge";
  node: SectionWithArticlesData_articles_edges_node;
}

export interface SectionWithArticlesData_articles {
  __typename: "ArticleConnection";
  edges: SectionWithArticlesData_articles_edges[];
}

export interface SectionWithArticlesData {
  __typename: "Section";
  id: number;
  name: string | null;
  url: string | null;
  articles: SectionWithArticlesData_articles | null;
}
