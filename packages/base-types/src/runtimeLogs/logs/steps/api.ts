import { APIBodyType, APIMethod } from '@base-types/node/api';
import { JsonArray, JsonObject, JsonValue } from 'type-fest';

import { LoggingNodeType, LogLevel } from '../../utils';
import { BaseStepLog } from '../base';

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
        body: string | JsonObject | JsonArray;
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
    body: JsonValue;
  };
}

export type ApiStepLog =
  // Non-verbose mode
  | BaseStepLog<LoggingNodeType.API, ApiLogMessage, LogLevel.INFO | LogLevel.ERROR>
  // Verbose mode
  // LogLevel.ERROR is used for both regular errors and verbose errors
  | BaseStepLog<LoggingNodeType.API, ApiLogMessage & VerboseApiLogMessage, LogLevel.VERBOSE | LogLevel.ERROR>;
