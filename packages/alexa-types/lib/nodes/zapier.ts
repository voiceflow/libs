import { DefaultStep, IntegrationType, NodeType } from './types';

export type ZapierUser = {
  user_id?: string;
  platform?: string;
  user_data?: { name?: string };
};

export enum ZapierActionType {
  START_A_ZAP = 'Start a Zap',
}

export type StepData = {
  user?: ZapierUser;
  value: string;
  selectedAction: ZapierActionType;
  selectedIntegration: IntegrationType.ZAPIER;
};

export type NodeData = {
  fail_id?: string | null;
  success_id?: string | null;
  action_data: {
    value: string;
    user?: ZapierUser;
  };
  selected_action: ZapierActionType;
  selected_integration: IntegrationType.ZAPIER;
};

export type Step = DefaultStep<NodeType.ZAPIER, StepData>;
