import { Nullable } from '@base-types/types';

import { NodeID } from './base';

export enum NoMatchType {
  PATH = 'path',
  REPROMPT = 'reprompt',

  /** @deprecated */
  BOTH = 'both',
}

export interface BaseStepNoMatch {
  types?: NoMatchType[];
  pathName?: string;
  randomize: boolean;

  /**
   * @deprecated use types instead
   */
  type?: Nullable<NoMatchType>;
}

export interface StepNoMatch<Prompt> extends BaseStepNoMatch {
  reprompts: Prompt[];
}

export interface BaseNodeNoMatch {
  nodeID?: NodeID;
  randomize?: boolean;
}

export interface NodeNoMatch<NoMatch> extends BaseNodeNoMatch {
  prompts?: NoMatch[];
}

// TODO: remove deprecated types when fully migrating data into a new format

/**
 * @deprecated use BaseNodeNoMatch instead
 */
export interface DeprecatedBaseNodeNoMatch {
  /**
   * @deprecated use noMatch.elseId instead
   */
  elseId?: NodeID;

  /**
   * @deprecated use noMatch.randomize instead
   */
  randomize?: boolean;
}

/**
 * @deprecated use NodeNoMatch instead
 */
export interface DeprecatedNodeNoMatch<NoMatch> extends DeprecatedBaseNodeNoMatch {
  /**
   * @deprecated use noMatch.noMatches instead
   */
  noMatches?: NoMatch[];
}
