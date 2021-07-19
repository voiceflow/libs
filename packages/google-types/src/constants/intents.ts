import { BuiltinIntent } from '@voiceflow/common';

export enum GoogleIntent {
  CANCEL = 'actions.intent.CANCEL',
  MAIN = 'actions.intent.MAIN',
  MEDIA_PAUSE = 'actions.intent.MEDIA_STATUS_PAUSED',
  MEDIA_STOP = 'actions.intent.MEDIA_STATUS_STOPPED',

  VOICEFLOW = 'VoiceFlowIntent',
}

// gactions
export const BUILT_IN_INTENTS: BuiltinIntent[] = [];

// dialogflow es
export const DFES_BUILT_IN_INTENTS: BuiltinIntent[] = [];
