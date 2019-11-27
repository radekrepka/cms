import gql from "graphql-tag";

export const ARTICLE_FRAGMENT = gql`
  fragment ArticleData on Article {
    id
    title
    image
    frontPage
    created_date
  }
`;

export const ARTICLE_WITH_BODY_FRAGMENT = gql`
  fragment ArticleWithBodyData on Article {
    ...ArticleData
    body
  }
  ${ARTICLE_FRAGMENT}
`;
