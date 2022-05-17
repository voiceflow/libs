import { AnyRecord } from '@voiceflow/common';

export enum NoteType {
  INTENT = 'INTENT',
}

export interface BaseNote {
  id: string;
  type: NoteType;
  text: string;
  meta?: AnyRecord;
  mentions: number[];
}

export interface IntentNoteMeta {
  intentID: string;
}

export interface IntentNote extends BaseNote {
  type: NoteType.INTENT;
  meta: IntentNoteMeta;
}

export type AnyNote = IntentNote;
