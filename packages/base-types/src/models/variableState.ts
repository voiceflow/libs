export type VariableValue = string | boolean | number | null;

export interface Model {
  _id: string;
  name: string;
  projectID: string;
  startFrom: { diagramID: string; stepID: string } | null;
  variables: Record<string, VariableValue>;
}
