export interface BaseResponse {
  status: number;
  statusText: string;
  clone: () => this;
  text: () => Promise<string>;
}
