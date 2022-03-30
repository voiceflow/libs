import { BasePort, BasePortList, PortType } from '@base-types/models';

import { NodeType } from './constants';
import { BaseNoMatchStepData, BaseNoReplyStepData, BaseStep, BaseStepNoMatch, BaseStepPorts } from './utils';

export interface StepData extends BaseNoReplyStepData, BaseNoMatchStepData {
  /**
   * @deprecated use noMatch instead
   */
  noMatches?: BaseStepNoMatch;
}

export type StepPorts = BaseStepPorts<{ [PortType.NO_MATCH]?: BasePort; [PortType.NO_REPLY]?: BasePort }, []>;

export interface Step<Data = StepData> extends BaseStep<Data, BasePortList, StepPorts> {
  type: NodeType.PROMPT;
}
