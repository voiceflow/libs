import { AnyRecord } from '@voiceflow/common';

import { ProjectNLP, PrototypeModel } from '../base';

export interface PrototypeNLPBase {
  type: string;
}

/**
 * @deprecated
 * LUIS NLU is being sunset by Microsoft and we are replacing it with VFNLU. Use `PrototypeNLPVFNLU`
 * instead.
 */
export interface PrototypeNLPLuis extends PrototypeNLPBase {
  type: ProjectNLP.LUIS;
  appID: string;
  resourceID?: string;
}
export interface PrototypeNLPVFNLU extends PrototypeNLPBase {
  type: ProjectNLP.VFNLU;
}

export type PrototypeNLP = PrototypeNLPLuis | PrototypeNLPVFNLU;

export interface Prototype<Data extends AnyRecord = AnyRecord> {
  nlp?: PrototypeNLP;
  data: Data;
  trainedModel?: PrototypeModel;
  lastTrainedTime?: number;
}
