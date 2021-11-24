import { Nullable } from '@/utils';

import { NodeID } from './base';

export enum NoReplyType {
  PATH = 'path',
  REPROMPT = 'reprompt',
}

export interface BaseStepNoReply {
  types: NoReplyType[];
  timeout?: number;
  pathName?: string;
  randomize: boolean;
}

export interface StepNoReply<Prompt> extends BaseStepNoReply {
  reprompts?: Prompt[];
}

export interface BaseNodeNoReply {
  nodeID?: NodeID;
  timeout?: number;
  randomize?: boolean;
}

export interface NodeNoReply<NoReply> extends BaseNodeNoReply {
  prompts?: NoReply[];
}

// TODO: remove deprecated types when fully migrating to StepNoReply/NodeNoReply

/**
 * @deprecated use StepNoReply instead
 */
export interface StepReprompt<Prompt> {
  /**
   * @deprecated use noReply instead
   */
  reprompt?: Nullable<Prompt>;
}

/**
 * @deprecated use NodeNoReply instead
 */
export interface NodeReprompt<Prompt> {
  /**
   * @deprecated use noReplies instead
   */
  reprompt?: Prompt;
}
