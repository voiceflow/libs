import { hasRequiredProperty, hasRequiredSchema, isArrayOf, isRecord } from '@base-types/utils/types';

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

export const isBaseAction = (value: unknown): value is BaseAction<unknown> =>
  isRecord(value) && hasRequiredProperty(value, 'type', 'string') && hasRequiredProperty(value, 'payload');

export const isActionPayload = (value: unknown): value is ActionPayload =>
  isRecord(value) && (!('actions' in value) || isArrayOf(value.actions, (value: unknown) => isBaseAction(value)));

export const isOpenURLAction = (action: unknown): action is OpenURLAction =>
  isBaseAction(action) &&
  action.type === ActionType.OPEN_URL &&
  hasRequiredSchema(action.payload, (value) => hasRequiredProperty(value, 'url', 'string'));
