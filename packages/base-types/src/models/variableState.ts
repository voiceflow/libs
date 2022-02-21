export type VariableValue = string | boolean | number | null;

export interface StartFrom {
  diagramID: string;
  stepID: string;
}

export interface Model {
  _id: string;
  name: string;
  projectID: string;
  startFrom: StartFrom | null;
  variables: Record<string, VariableValue>;
}
