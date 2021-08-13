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

export interface ResumeSession {
  type: SessionType.RESUME;
}

export interface VersionSettings {
  repeat: RepeatType;
  session: RestartSession | ResumeSession;
  defaultCanvasNodeVisibility: Nullable<Utils.CanvasNodeVisibility>;
}

export const defaultVersionSettings = ({
  repeat = RepeatType.ALL,
  session = { type: SessionType.RESTART },
  defaultCanvasNodeVisibility = null,
}: Partial<VersionSettings> = {}): VersionSettings => ({
  repeat,
  session,
  defaultCanvasNodeVisibility,
});
