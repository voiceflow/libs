export interface Model {
  id: string;
  projectID: string;
  name: string;
  parameters: Record<string, string>;
  body: string;
  stop: boolean;
  paths: string[];
  defaultPath: number;
}
