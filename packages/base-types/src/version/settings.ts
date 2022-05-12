import { CardLayout } from '@base-types/node/cardV2';
import { Nullable } from '@base-types/types';

import { Utils } from '../node';

export enum RepeatType {
  OFF = 'OFF',
  ALL = 'ALL',
  DIALOG = 'DIALOG',
}

export enum SessionType {
  RESUME = 'resume',
  RESTART = 'restart',
}

export interface RestartSession {
  type: SessionType.RESTART;
}

export interface ResumeSession<Prompt = unknown> {
  type: SessionType.RESUME;
  resume: Nullable<Prompt>;
  follow: Nullable<Prompt>;
}

export type Session<Prompt = unknown> = RestartSession | ResumeSession<Prompt>;

export interface Settings<Prompt = unknown> {
  error: Nullable<Prompt>;
  repeat: RepeatType;
  session: Session<Prompt>;
  defaultCanvasNodeVisibility: Nullable<Utils.CanvasNodeVisibility>;
  defaultCardLayout: Nullable<CardLayout>;
}

export const defaultSettings = <Prompt>({
  error = null,
  repeat = RepeatType.ALL,
  session = { type: SessionType.RESTART },
  defaultCanvasNodeVisibility = null,
  defaultCardLayout = null,
}: Partial<Settings<Prompt>> = {}): Settings<Prompt> => ({
  error,
  repeat,
  session,
  defaultCanvasNodeVisibility,
  defaultCardLayout,
});
