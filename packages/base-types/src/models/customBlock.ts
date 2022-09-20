export interface Model {
  _id: string;
  projectID: string;
  name: string;
  parameters: Record<
    string,
    {
      id: string;
      name: string;
    }
  >;
  body: string;
  stop: boolean;
  paths: string[];
  defaultPath: number;
}
