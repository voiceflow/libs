import { RequestHeaders } from './request-options.interface';

export interface ClientConfiguration<Headers> {
  baseURL?: string;
  headers?: RequestHeaders;
}
