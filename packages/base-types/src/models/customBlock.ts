export interface BaseSource {
    _id: string;
    projectID: string;
    parameters: string[];
}

export interface CustomActionSource extends BaseSource {
    name: string;
    body: string;
    stop: boolean;
    paths: string[];
    defaultPath: number;
}
