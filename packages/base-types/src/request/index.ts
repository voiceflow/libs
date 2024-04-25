import { inherit, validateAJV } from '@base-types/utils/types';

import type { Chip } from '../button';
import { ActionPayload, actionPayloadSchema, isActionPayload } from './action';

export * as Action from './action';

export enum RequestType {
  TEXT = 'text',
  ACTION = 'action',
  INTENT = 'intent',
  LAUNCH = 'launch',
  NO_REPLY = 'no-reply',
}

export interface RequestConfig {
  tts?: boolean;
  stopAll?: boolean;
  stripSSML?: boolean;
  stopTypes?: string[];
  selfDelegate?: boolean;
  excludeTypes?: string[];
}

export interface VerboseValue {
  rawText: string; // the original word found in the query
  canonicalText: string; // the transformed word returned by LUIS for list entities
  startIndex: number; // the index the word starts on in the query string
}

export interface Entity {
  name: string; // name of matched entity
  value: string; // inferred value of matched entity
  query?: string; // raw value of matched entity

  /**
   * @deprecated This value is no longer generated. Please remove all code relying on
   * LUIS NLU to produce `verboseValue`
   */
  verboseValue?: VerboseValue[]; // more detailed results from LUIS
}

export interface LabelRequestPayload {
  label?: string;
}
export interface BaseRequest {
  type: string;
  payload?: unknown;
  diagramID?: string; // particular topic to match against
}

export interface LaunchRequestPayload {
  persona?: string;
}

export interface LaunchRequest extends BaseRequest {
  type: RequestType.LAUNCH;
  payload?: LaunchRequestPayload;
}

export interface NoReplyRequest extends Omit<BaseRequest, 'payload'> {
  type: RequestType.NO_REPLY;
}

export interface TextRequest extends BaseRequest {
  type: RequestType.TEXT;
  payload: string;
}

interface ActionAndLabelRequestPayload extends ActionPayload, LabelRequestPayload { }

export interface IntentRequestPayload extends ActionAndLabelRequestPayload {
  query: string; // original text input
  intent: { name: string }; // matched intent name
  entities: Entity[]; // entities matches - multiple of the same entity name may be matched
  confidence?: number; // 0-1 confidence of match;
  data?: Record<string, unknown>;
}

export interface IntentRequest extends BaseRequest {
  type: RequestType.INTENT;
  payload: IntentRequestPayload;
}

export interface GeneralRequest extends BaseRequest {
  type: string; // the general request type is dynamic
  payload?: ActionAndLabelRequestPayload;
}

export interface ActionRequest extends BaseRequest {
  type: RequestType.ACTION;
  payload?: ActionAndLabelRequestPayload;
}

export interface BaseRequestButton<T extends BaseRequest = BaseRequest> {
  name: string;
  request: T;
}

export interface TextRequestButton extends BaseRequestButton<TextRequest> { }

export interface ActionRequestButton extends BaseRequestButton<ActionRequest> { }

export interface IntentRequestButton extends BaseRequestButton<IntentRequest> { }

export interface GeneralRequestButton extends BaseRequestButton<GeneralRequest> { }

export type AnyRequestButton = TextRequestButton | IntentRequestButton | GeneralRequestButton | ActionRequestButton;

export interface NodeButton {
  /**
   * @deprecated Use buttons
   */
  chips?: Chip[];

  buttons?: AnyRequestButton[];
}

const $baseRequestSchema = {
  type: "object",
  required: ["type"],
  additionalProperties: true,
  properties: {
    type: { type: "string" },
    diagramID: { type: "string" }
  }
};

export const isBaseRequest = (value: unknown): value is BaseRequest =>
  validateAJV($baseRequestSchema)(value);

export const isTextRequest = (value: unknown): value is TextRequest =>
  validateAJV(
    inherit(
      $baseRequestSchema,
      {
        type: "object",
        required: ["payload"],
        properties: {
          type: { enum: [RequestType.TEXT] },
          payload: { type: 'string' }
        }
      }
    )
  )(value)

const $labelPayloadSchema = {
  type: "object",
  required: [],
  additionalProperties: true,
  properties: {
    label: { type: 'string' }
  }
};

const $actionAndLabelPayloadSchema = inherit(actionPayloadSchema, $labelPayloadSchema);

export const isActionRequest = (value: unknown): value is ActionRequest =>
  isBaseRequest(value) &&
  validateAJV(
    inherit(
      $baseRequestSchema,
      {
        type: "object",
        required: ["type"],
        properties: {
          type: { enum: [RequestType.ACTION] },
          payload: $actionAndLabelPayloadSchema
        }
      }
    )
  )(value)

export const isLaunchRequest = (value: unknown): value is LaunchRequest =>
  isBaseRequest(value) &&
  validateAJV(
    inherit(
      $baseRequestSchema,
      {
        type: "object",
        required: [],
        properties: {
          type: { enum: [RequestType.LAUNCH] },
          payload: {
            type: "object",
            required: [],
            additionalProperties: true,
            properties: {
              persona: { type: 'string' }
            }
          }
        }
      }
    )
  )(value)

export const isNoReplyRequest = (value: unknown): value is NoReplyRequest => isBaseRequest(value) && value.type === RequestType.NO_REPLY;

const $entitySchema = {
  type: "object",
  required: ['name', 'value'],
  properties: {
    name: { type: 'string' },
    value: { type: 'string' },
    query: { type: 'string' }
  }
};

const $intentRequestPayloadSchema = {
  type: "object",
  required: ['query', 'entities'],
  additionalProperties: true,
  properties: {
    query: { type: 'string' },
    intent: {
      type: "object",
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    },
    entities: {
      type: "array",
      items: $entitySchema
    },
    confidence: { type: 'number' },
    data: { type: 'object' }
  }
}

export const isIntentRequest = (value: unknown): value is IntentRequest =>
  validateAJV(
    inherit(
      $baseRequestSchema,
      {
        type: "object",
        required: ['payload'],
        properties: {
          type: { enum: [RequestType.INTENT] },
          payload: $intentRequestPayloadSchema
        }
      }
    )
  )(value);

export const isGeneralRequest = (value: unknown): value is GeneralRequest =>
  validateAJV(
    inherit(
      $baseRequestSchema,
      {
        type: "object",
        properties: {
          payload: $actionAndLabelPayloadSchema
        }
      }
    )
  )(value) && (
    !Object.values<string>(RequestType).includes((value as any).type)
  );
