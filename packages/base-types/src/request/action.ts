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

export const isOpenURLAction = (action: BaseAction): action is OpenURLAction => action.type === ActionType.OPEN_URL;
