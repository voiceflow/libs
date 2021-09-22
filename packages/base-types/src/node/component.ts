import { NodeType } from './constants';
import { StepData } from './flow';
import { BaseStep } from './utils';

export { StepData } from './flow';

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.COMPONENT;
}
