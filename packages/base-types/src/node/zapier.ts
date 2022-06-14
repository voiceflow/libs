import { NodeType } from './constants';
import { BaseStep, IntegrationType, IntegrationUser, NodeSuccessFailID, SuccessFailStepPorts } from './utils';

export enum ZapierActionType {
  START_A_ZAP = 'Start a Zap',
}

export interface StepData {
  user?: IntegrationUser;
  value: string;
  selectedAction: ZapierActionType;
  selectedIntegration: IntegrationType.ZAPIER;
}

export interface StepPorts extends SuccessFailStepPorts {}

export interface ActionData {
  user?: IntegrationUser;
  value: string;
}

export interface NodeData extends NodeSuccessFailID {
  action_data: ActionData;
  selected_action: ZapierActionType;
  selected_integration: IntegrationType.ZAPIER;
}

export interface Step<Data = StepData> extends BaseStep<Data, StepPorts> {
  type: NodeType.ZAPIER;
}
