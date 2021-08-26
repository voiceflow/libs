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
}

export interface BaseStepNoMatches extends BaseStepNoMatch {
  randomize?: boolean;
}

export interface StepNoMatch<Prompt> extends BaseStepNoMatches {
  reprompts: Prompt[];
}

export interface BaseNodeNoMatch {
  elseId?: NodeID;
  randomize?: boolean;
}

export interface NodeNoMatch<NoMatch> extends BaseNodeNoMatch {
  noMatches?: NoMatch[];
}
