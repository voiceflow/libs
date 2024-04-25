import { validateAJV } from '@base-types/utils/types';

export enum ActionType {
  OPEN_URL = 'open_url',
}

export interface BaseAction<Payload = unknown> {
  type: string;
  payload: Payload;
}

export interface OpenURLActionPayload {
  url: string;
}

export interface OpenURLAction extends BaseAction<OpenURLActionPayload> {
  type: ActionType.OPEN_URL;
}

export interface ActionPayload {
  actions?: BaseAction[];
}

const $baseActionSchema = {
  type: "object",
  additionalProperties: true,
  required: ['type', 'payload'],
  properties: {
    type: { type: "string" },
  }
}

export const isBaseAction = (value: unknown): value is BaseAction<unknown> => (
  validateAJV($baseActionSchema)(value)
);

export const actionPayloadSchema = {
  type: "object",
  additionalProperties: true,
  required: [],
  properties: {
    actions: {
      type: "array",
      items: $baseActionSchema,
    }
  }
}

export const isActionPayload = (value: unknown): value is ActionPayload => (
  validateAJV(actionPayloadSchema)(value)
)

export const isOpenURLAction = (value: unknown): value is OpenURLAction =>
  isBaseAction(value) &&
  validateAJV({
    type: "object",
    additionalProperties: true,
    properties: {
      type: { enum: [ActionType.OPEN_URL] },
      payload: {
        type: "object",
        additionalProperties: true,
        properties: {
          url: { type: "string" }
        }
      }
    }
  })(value);
