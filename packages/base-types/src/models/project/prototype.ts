import { AnyRecord } from '@base-types/types';

import { ProjectNLP, PrototypeModel } from '../base';

export interface PrototypeNLPBase {
  type: string;
}

export interface PrototypeNLPLuis extends PrototypeNLPBase {
  type: ProjectNLP.LUIS;
  appID: string;
  resourceID?: string;
}

export type PrototypeNLP = PrototypeNLPLuis;

export interface Prototype<Data extends AnyRecord = AnyRecord> {
  nlp?: PrototypeNLP;
  data: Data;
  trainedModel?: PrototypeModel;
  lastTrainedTime?: number;
}
