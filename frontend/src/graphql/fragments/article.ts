import gql from "graphql-tag";

export const ARTICLE_WITHOUT_BODY_FRAGMENT = gql`
  fragment ArticleWithoutBodyData on Article {
    id
    title
    image
    frontPage
    created_date
  }
`;

export const ARTICLE_FRAGMENT = gql`
  fragment ArticleData on Article {
    ...ArticleWithoutBodyData
    body
  }
  ${ARTICLE_WITHOUT_BODY_FRAGMENT}
`;
