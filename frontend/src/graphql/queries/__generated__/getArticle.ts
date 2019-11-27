/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getArticle
// ====================================================

export interface getArticle_article {
  __typename: "Article";
  id: number;
  title: string | null;
  image: string | null;
  body: string | null;
  frontPage: boolean | null;
  created_date: string | null;
}

export interface getArticle {
  article: getArticle_article | null;
}

export interface getArticleVariables {
  id: number;
}
