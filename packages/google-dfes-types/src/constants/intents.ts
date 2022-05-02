import { BuiltinIntent } from '@voiceflow/common';

export enum DialogflowESIntent {
  FALLBACK = 'actions.intent.FALLBACK',
}

export const BUILT_IN_INTENTS: BuiltinIntent[] = [
  {
    name: DialogflowESIntent.FALLBACK,
    slots: [],
  },
];
