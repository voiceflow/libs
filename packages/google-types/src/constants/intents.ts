import { BuiltinIntent } from '@voiceflow/common';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';

export enum GoogleIntent {
  NO = 'actions.intent.NO',
  YES = 'actions.intent.YES',
  REPEAT = 'actions.intent.REPEAT',
}

export enum GoogleStatusIntent {
  MEDIA_PAUSE = 'actions.intent.MEDIA_STATUS_PAUSED',
  MEDIA_STOP = 'actions.intent.MEDIA_STATUS_STOPPED',
  // eslint-disable-next-line no-secrets/no-secrets
  MEDIA_FINISH = 'actions.intent.MEDIA_STATUS_FINISHED',
  MEDIA_FAIL = 'actions.intent.MEDIA_STATUS_FAILED',
}

// check that intent is in the GoogleIntent enum, returning boolean
export const isGoogleIntent = (intent: any): intent is GoogleIntent => Object.values(GoogleIntent).includes(intent);
export interface DefaultIntent extends VoiceflowConstants.DefaultIntent {
  keep?: string[];
}

export const BUILT_IN_INTENTS: BuiltinIntent[] = [
  {
    name: GoogleIntent.YES,
    slots: [],
  },
  {
    name: GoogleIntent.NO,
    slots: [],
  },
  {
    name: GoogleIntent.REPEAT,
    slots: [],
  },
  {
    name: GoogleStatusIntent.MEDIA_PAUSE,
    slots: [],
  },
  {
    name: GoogleStatusIntent.MEDIA_STOP,
    slots: [],
  },
  {
    name: GoogleStatusIntent.MEDIA_FINISH,
    slots: [],
  },
  {
    name: GoogleStatusIntent.MEDIA_FAIL,
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
