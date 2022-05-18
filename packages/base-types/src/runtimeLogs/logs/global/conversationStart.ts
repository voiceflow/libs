import { GlobalLogKinds } from '@base-types/runtimeLogs/utils';

import { BaseGlobalLog } from '../base';

export type ConversationStartLog = BaseGlobalLog<
  GlobalLogKinds.CONVERSATION_START,
  {
    versionID: string;
    userID: string;
  }
>;
