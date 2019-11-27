/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSections
// ====================================================

export interface getSections_sections_edges_node {
  __typename: "Section";
  id: number;
  name: string | null;
  url: string | null;
}

export interface getSections_sections_edges {
  __typename: "SectionEdge";
  node: getSections_sections_edges_node;
}

export interface getSections_sections {
  __typename: "SectionConnection";
  edges: getSections_sections_edges[];
}

export interface getSections {
  sections: getSections_sections | null;
}
