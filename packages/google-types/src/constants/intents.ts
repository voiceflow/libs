import { BuiltinIntent } from '@voiceflow/common';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

export enum GoogleIntent {
  CANCEL = 'actions.intent.CANCEL',
  MAIN = 'actions.intent.MAIN',
  MEDIA_PAUSE = 'actions.intent.MEDIA_STATUS_PAUSED',
  MEDIA_STOP = 'actions.intent.MEDIA_STATUS_STOPPED',
  // eslint-disable-next-line no-secrets/no-secrets
  MEDIA_FINISH = 'actions.intent.MEDIA_STATUS_FINISHED',
  MEDIA_FAIL = 'actions.intent.MEDIA_STATUS_FAILED',
  NO = 'actions.intent.NO',
  YES = 'actions.intent.YES',
  REPEAT = 'actions.intent.REPEAT',
  NO_MATCH_1 = 'actions.intent.NO_MATCH_1',
  NO_MATCH_2 = 'actions.intent.NO_MATCH_2',
  NO_MATCH_FINAL = 'actions.intent.NO_MATCH_FINAL',
  NO_INPUT_1 = 'actions.intent.NO_INPUT_1',
  NO_INPUT_2 = 'actions.intent.NO_INPUT_2',
  NO_INPUT_FINAL = 'actions.intent.NO_INPUT_FINAL',
  PLAY_GAME = 'actions.intent.PLAY_GAME',
  VOICEFLOW = 'VoiceFlowIntent',
}
export interface DefaultIntent extends VoiceflowConstants.DefaultIntent {
  keep?: string[];
}

export const BUILT_IN_INTENTS: BuiltinIntent[] = [
  {
    name: GoogleIntent.CANCEL,
    slots: [],
  },
  {
    name: GoogleIntent.MAIN,
    slots: [],
  },
  {
    name: GoogleIntent.MEDIA_PAUSE,
    slots: [],
  },
  {
    name: GoogleIntent.MEDIA_STOP,
    slots: [],
  },
  {
    name: GoogleIntent.MEDIA_FINISH,
    slots: [],
  },
  {
    name: GoogleIntent.MEDIA_FAIL,
    slots: [],
  },
  {
    name: GoogleIntent.NO,
    slots: [],
  },
  {
    name: GoogleIntent.YES,
    slots: [],
  },
  {
    name: GoogleIntent.REPEAT,
    slots: [],
  },
  {
    name: GoogleIntent.NO_MATCH_1,
    slots: [],
  },
  {
    name: GoogleIntent.NO_MATCH_2,
    slots: [],
  },
  {
    name: GoogleIntent.NO_MATCH_FINAL,
    slots: [],
  },
  {
    name: GoogleIntent.NO_INPUT_1,
    slots: [],
  },
  {
    name: GoogleIntent.NO_INPUT_2,
    slots: [],
  },
  {
    name: GoogleIntent.NO_INPUT_FINAL,
    slots: [],
  },
  {
    name: GoogleIntent.PLAY_GAME,
    slots: [],
  },
];

export const DEFAULT_INTENTS: Record<string, { defaults: DefaultIntent[]; builtIns: DefaultIntent[] }> = {
  // English (AU,CA,US,UK,IN)
  en: {
    defaults: [
      {
        name: GoogleIntent.YES,
        samples: ['yes', 'yea', 'ok', 'okay', 'yup', 'ya', 'sure'],
        keep: ['yes'],
      },
      {
        name: GoogleIntent.NO,
        samples: ['no', 'nope', 'nay', 'nah', 'no way', 'negative'],
      },
    ],
    builtIns: [
      {
        name: GoogleIntent.REPEAT,
        samples: ['repeat', 'again', 'say again'],
      },
    ],
  },
};
