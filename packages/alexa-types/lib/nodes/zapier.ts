import { DefaultStep, IntegrationType, IntegrationUser, NodeType } from './types';

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
  fail_id?: string | null;
  success_id?: string | null;
  action_data: {
    value: string;
    user?: IntegrationUser;
  };
  selected_action: ZapierActionType;
  selected_integration: IntegrationType.ZAPIER;
};

export type Step = DefaultStep<NodeType.ZAPIER, StepData>;
