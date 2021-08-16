import { Nullable } from '@voiceflow/api-sdk';

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

export interface BaseVersionSettings<Prompt = unknown> {
  error: Nullable<Prompt>;
  repeat: RepeatType;
  session: RestartSession | ResumeSession<Prompt>;
  defaultCanvasNodeVisibility: Nullable<Utils.CanvasNodeVisibility>;
}

export const defaultBaseVersionSettings = <Prompt>({
  error = null,
  repeat = RepeatType.ALL,
  session = { type: SessionType.RESTART },
  defaultCanvasNodeVisibility = null,
}: Partial<BaseVersionSettings<Prompt>> = {}): BaseVersionSettings<Prompt> => ({
  error,
  repeat,
  session,
  defaultCanvasNodeVisibility,
});
