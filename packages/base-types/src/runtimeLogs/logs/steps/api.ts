import { APIBodyType, APIMethod } from '@base-types/node/api';

import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';
import { LogLevel } from '../levels';

interface ApiLogMessage {
  request: {
    method: APIMethod;
    url: string;
  };
  response: {
    statusCode: number;
    statusMessage: string;
  };
}

interface VerboseApiLogMessage {
  request: {
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
  response: {
    headers: Record<string, string>;
    body: string;
  };
}

export type ApiStepLog =
  // Non-verbose mode
  | BaseStepLog<StepLogKind.API, ApiLogMessage, LogLevel.INFO | LogLevel.ERROR>
  // Verbose mode
  // LogLevel.ERROR is used for both regular errors and verbose errors
  | BaseStepLog<StepLogKind.API, ApiLogMessage & VerboseApiLogMessage, LogLevel.VERBOSE | LogLevel.ERROR>;
