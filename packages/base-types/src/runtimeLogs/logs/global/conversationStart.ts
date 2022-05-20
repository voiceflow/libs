import { BaseGlobalLog } from '../base';
import { GlobalLogKind } from '../kinds';

export type ConversationStartLog = BaseGlobalLog<
  GlobalLogKind.CONVERSATION_START,
  {
    versionID: string;
    userID: string;
  }
>;
