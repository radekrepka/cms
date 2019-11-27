import gql from "graphql-tag";
import {ARTICLE_FRAGMENT} from './article';

export const SECTION_FRAGMENT = gql`
  fragment SectionData on Section {
    id
    name
    url
  }
`;

export const SECTION_WITH_ARTICLES_FRAGMENT = gql`
  fragment SectionWithArticlesData on Section {
    ...SectionData
    articles {
      edges {
        node {
          ...ArticleData
        }
      }
    }
  }
  ${SECTION_FRAGMENT}
  ${ARTICLE_FRAGMENT}
`;
