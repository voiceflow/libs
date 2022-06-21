import { FlowReference, ValueChange } from '../../utils';
import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

export type FlowStepLog = BaseStepLog<StepLogKind.FLOW, ValueChange<FlowReference>>;
