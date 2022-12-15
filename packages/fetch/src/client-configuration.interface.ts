import { RequestHeaders } from './request-options.interface';

export interface ClientConfiguration {
  baseURL?: string;
  headers?: RequestHeaders;
}
