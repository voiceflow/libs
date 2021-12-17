/* eslint-disable camelcase */
import { NodeType } from './constants';
import { BaseStep, IntegrationType, NodeSuccessFailID } from './utils';

export enum TwilioActionType {
  TEXT = 'text',
  CALL = 'call',
}

export interface StepData {
  selectedIntegration: IntegrationType.TWILIO;
  selectedAction: TwilioActionType;
  toNumber?: string;
  textMessage?: string;
}

export interface NodeData extends NodeSuccessFailID {
  action_data: {
    selected_action: TwilioActionType;
    to_number?: string;
    text_message?: string;
  };
  selected_integration: IntegrationType.TWILIO;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.TWILIO;
}
