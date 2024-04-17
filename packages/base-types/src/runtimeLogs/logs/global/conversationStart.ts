import type { BaseGlobalLog } from '../base';
import type { GlobalLogKind } from '../kinds';

export type ConversationStartLog = BaseGlobalLog<
  GlobalLogKind.CONVERSATION_START,
  {
    versionID: string;
    userID: string;
  }
>;
