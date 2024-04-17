import type { NodeType } from './constants';
import type { StepData } from './flow';
import type { BaseStep } from './utils';

export { StepData } from './flow';

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.COMPONENT;
}
