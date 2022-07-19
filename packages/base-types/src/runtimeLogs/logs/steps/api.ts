import { APIBodyType, APIMethod } from '@base-types/node/api';
import { PathReference } from '@base-types/runtimeLogs/utils';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';
import { LogLevel } from '../levels';

interface ApiLogMessageRequest {
  method: APIMethod;
  url: string;
  headers: null;
  query: null;
  bodyType: null;
  body: null;
}

interface ApiLogMessageResponse {
  statusCode: number;
  statusText: string;
  headers: null;
  body: null;
}

interface ApiLogMessage {
  request: ApiLogMessageRequest;
  response: ApiLogMessageResponse;
}

type VerboseApiLogMessageRequest = {
  url: string;
  headers: Record<string, string>;
  query: Record<string, string>;
} & (
  | {
      method: Exclude<APIMethod, APIMethod.GET>;
      bodyType: APIBodyType;
      body: string;
    }
  | {
      // GET requests can't have a body
      method: APIMethod.GET;
      bodyType: null;
      body: null;
    }
);

interface VerboseApiLogMessageResponse {
  statusCode: number;
  statusText: string;
  headers: Record<string, string>;
  body: string;
}

interface VerboseApiLogMessage {
  request: VerboseApiLogMessageRequest;
  response: VerboseApiLogMessageResponse;
}

export type ApiStepLog =
  // Non-verbose mode
  | BaseStepLog<StepLogKind.API, PathReference & ApiLogMessage, LogLevel.INFO>
  // Verbose mode
  | BaseStepLog<StepLogKind.API, PathReference & VerboseApiLogMessage, LogLevel.VERBOSE>
  // LogLevel.ERROR is used for both regular errors and verbose errors
  | BaseStepLog<StepLogKind.API, PathReference & (ApiLogMessage | VerboseApiLogMessage), LogLevel.ERROR>;
