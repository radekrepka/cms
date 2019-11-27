/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSection
// ====================================================

export interface getSection_section_articles_edges_node {
  __typename: "Article";
  id: number;
  title: string | null;
  image: string | null;
  frontPage: boolean | null;
  created_date: any | null;
}

export interface getSection_section_articles_edges {
  __typename: "ArticleEdge";
  node: getSection_section_articles_edges_node;
}

export interface getSection_section_articles {
  __typename: "ArticleConnection";
  edges: getSection_section_articles_edges[];
}

export interface getSection_section {
  __typename: "Section";
  id: number;
  name: string | null;
  url: string | null;
  articles: getSection_section_articles | null;
}

export interface getSection {
  section: getSection_section | null;
}

export interface getSectionVariables {
  url: string;
}
