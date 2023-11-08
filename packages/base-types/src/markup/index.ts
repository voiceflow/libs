export interface VariableReference {
  variableID: string;
}
export interface EntityReference {
  entityID: string;
}
export interface MarkupSpan {
  attributes: Record<string, unknown>;
  text: Markup;
}

export type MarkupNode = string | MarkupSpan | VariableReference | EntityReference;

export type Markup = Array<MarkupNode>;
