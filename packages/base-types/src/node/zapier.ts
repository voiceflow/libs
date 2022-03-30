import { NodeType } from './constants';
import { BasePortList, BaseStep, IntegrationType, IntegrationUser, NodeSuccessFailID, SuccessFailStepPorts } from './utils';

export enum ZapierActionType {
  START_A_ZAP = 'Start a Zap',
}

export interface StepData {
  user?: IntegrationUser;
  value: string;
  selectedAction: ZapierActionType;
  selectedIntegration: IntegrationType.ZAPIER;
}

export type StepPorts = SuccessFailStepPorts;

export interface ActionData {
  user?: IntegrationUser;
  value: string;
}

export interface NodeData extends NodeSuccessFailID {
  action_data: ActionData;
  selected_action: ZapierActionType;
  selected_integration: IntegrationType.ZAPIER;
}

export interface Step<Data = StepData> extends BaseStep<Data, BasePortList, StepPorts> {
  type: NodeType.ZAPIER;
}
