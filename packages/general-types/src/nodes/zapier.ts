/* eslint-disable camelcase */

import { BaseStep, IntegrationType, IntegrationUser, NodeID, NodeType } from './types';

export enum ZapierActionType {
  START_A_ZAP = 'Start a Zap',
}

export interface StepData {
  user?: IntegrationUser;
  value: string;
  selectedAction: ZapierActionType;
  selectedIntegration: IntegrationType.ZAPIER;
}

export interface NodeData {
  fail_id?: NodeID;
  success_id?: NodeID;
  action_data: {
    user?: IntegrationUser;
    value: string;
  };
  selected_action: ZapierActionType;
  selected_integration: IntegrationType.ZAPIER;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.ZAPIER;
}
