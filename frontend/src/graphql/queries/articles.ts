import gql from "graphql-tag";
import {ARTICLE_FRAGMENT} from '../fragments/article';

export const GET_ARTICLE = gql`
  query getArticle($id: Int!) {
    article(id: $id) {
      ...ArticleData
    }
  }
  ${ARTICLE_FRAGMENT}
`;
