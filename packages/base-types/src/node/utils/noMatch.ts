import { Nullable } from '@voiceflow/api-sdk';

import { NodeID } from './base';

export enum NoMatchType {
  PATH = 'path',
  BOTH = 'both',
  REPROMPT = 'reprompt',
}

export interface BaseStepNoMatch {
  type: Nullable<NoMatchType>;
  pathName?: string;
  randomize: boolean;
}

export interface StepNoMatch<R> extends BaseStepNoMatch {
  reprompts: R[];
}

export interface BaseNodeNoMatch {
  elseId?: NodeID;
  randomize?: boolean;
}

export interface NodeNoMatch<N> extends BaseNodeNoMatch {
  noMatches?: N[];
}
