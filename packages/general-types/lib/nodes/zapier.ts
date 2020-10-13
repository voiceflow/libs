import { DefaultStep, IntegrationType, IntegrationUser, NodeID, NodeType } from './types';

export enum ZapierActionType {
  START_A_ZAP = 'Start a Zap',
}

export type StepData = {
  user?: IntegrationUser;
  value: string;
  selectedAction: ZapierActionType;
  selectedIntegration: IntegrationType.ZAPIER;
};

export type NodeData = {
  fail_id?: NodeID;
  success_id?: NodeID;
  action_data: {
    user?: IntegrationUser;
    value: string;
  };
  selected_action: ZapierActionType;
  selected_integration: IntegrationType.ZAPIER;
};

export type Step = DefaultStep<NodeType.ZAPIER, StepData>;
