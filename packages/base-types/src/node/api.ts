import { Nullable } from '@base-types/types';

import { NodeType } from './constants';
import { BaseStep, IntegrationType, NodeSuccessFailID, SuccessFailStepPorts } from './utils';

export interface APIKeyVal {
  key: string;
  val: string;
}

export interface APIMapping {
  path: string;
  var: Nullable<string>;
}

export enum APIBodyType {
  FORM_DATA = 'formData',
  RAW_INPUT = 'rawInput',
  URL_ENCODED = 'urlEncoded',
}

export enum APIMethod {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const lowercaseAPIMethod = <T extends APIMethod>(method: T): Lowercase<T> => method.toLowerCase() as Lowercase<T>;

export enum APIActionType {
  GET = 'Make a GET Request',
  PUT = 'Make a PUT Request',
  POST = 'Make a POST Request',
  PATCH = 'Make a PATCH Request',
  DELETE = 'Make a DELETE Request',
}

export interface StepData {
  url: string;
  body: APIKeyVal[];
  method: APIMethod;
  content: string;
  params: APIKeyVal[];
  headers: APIKeyVal[];
  mappings: APIMapping[];
  bodyType: APIBodyType;
  selectedAction: APIActionType;
  selectedIntegration: IntegrationType.CUSTOM_API;
}

export interface StepPorts extends SuccessFailStepPorts<[]> {}

export interface NodeData extends NodeSuccessFailID {
  action_data: {
    url: string;
    body: APIKeyVal[];
    method: APIMethod;
    params: APIKeyVal[];
    headers: APIKeyVal[];
    mapping: APIMapping[];
    content: string;
    bodyInputType: APIBodyType;
    selected_action: APIActionType;
  };
  selected_action: APIActionType;
  selected_integration: IntegrationType.CUSTOM_API;
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.API;
}
