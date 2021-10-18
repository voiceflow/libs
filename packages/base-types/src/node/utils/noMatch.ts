import { Nullable } from '@/models/utils';

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

export interface StepNoMatch<Prompt> extends BaseStepNoMatch {
  reprompts: Prompt[];
  randomize: boolean;
}

export interface BaseNodeNoMatch {
  elseId?: NodeID;
  randomize?: boolean;
}

export interface NodeNoMatch<NoMatch> extends BaseNodeNoMatch {
  noMatches?: NoMatch[];
}
