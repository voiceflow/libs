import { DefaultStep, IntegrationType, NodeType } from './types';

export type APIKeyVal = {
  key: string;
  val: string;
};

export type APIMapping = {
  path: string;
  var: string | null;
};

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

export enum APIActionType {
  GET = 'Make a GET Request',
  PUT = 'Make a PUT Request',
  POST = 'Make a POST Request',
  PATCH = 'Make a PATCH Request',
  DELETE = 'Make a DELETE Request',
}

export type StepData = {
  url: string;
  body: APIKeyVal[];
  method: APIMethod;
  content: string;
  params: APIKeyVal[];
  headers: APIKeyVal[];
  mappings: APIMapping[];
  bodyType: APIBodyType;
  selectedAction: APIActionType;
  selectedIntegration: IntegrationType;
};

export type NodeData = {
  fail_id?: string | null;
  success_id?: string | null;
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
};

export type Step = DefaultStep<NodeType.API, StepData>;
