import gql from "graphql-tag";
import {ARTICLE_FRAGMENT, ARTICLE_WITHOUT_BODY_FRAGMENT} from '../fragments/article';

export const GET_ARTICLE = gql`
  query getArticle($id: Int!) {
    article(id: $id) {
      ...ArticleData
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export const GET_ARTICLES = gql`
  query getArticles {
    articles {
      edges {
        node {
          ...ArticleWithoutBodyData
        }
      }
    }
  }
  ${ARTICLE_WITHOUT_BODY_FRAGMENT}
`;
