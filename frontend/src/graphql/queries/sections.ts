import gql from "graphql-tag";
import {SECTION_FRAGMENT, SECTION_WITH_ARTICLES_FRAGMENT} from '../fragments/section';

export const GET_SECTION = gql`
  query getSection($url: String!) {
    section(url: $url) {
      ...SectionWithArticlesData
    }
  }
  ${SECTION_WITH_ARTICLES_FRAGMENT}
`;

export const GET_SECTIONS = gql`
  query getSections {
    sections {
      edges {
        node {
          ...SectionData
        }
      }
    }
  }
  ${SECTION_FRAGMENT}
`;
