import gql from "graphql-tag";
import {ARTICLE_WITH_BODY_FRAGMENT, ARTICLE_FRAGMENT} from '../fragments/article';

export const GET_ARTICLE = gql`
  query getArticle($id: Int!) {
    article(id: $id) {
      ...ArticleWithBodyData
    }
  }
  ${ARTICLE_WITH_BODY_FRAGMENT}
`;

export const GET_ARTICLES = gql`
  query getArticles {
    articles {
      edges {
        node {
          ...ArticleData
        }
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;
