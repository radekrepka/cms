import gql from "graphql-tag";

export const ARTICLE_FRAGMENT = gql`
  fragment ArticleData on Article {
    id
    title
    image
    body
    frontPage
    created_date
  }
`;
