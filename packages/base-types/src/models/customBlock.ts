export interface CustomBlockSource {
  id: string;
  projectID: string;
  name: string;
  parameters: {
    id: string;
    label: string;
  }[];
  body: string;
  stop: boolean;
  paths: string[];
  defaultPath: number;
}
