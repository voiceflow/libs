import type { CarouselLayout } from '@base-types/node/carousel';
import type { AIModelParams } from '@base-types/utils/ai';
import type { Nullable } from '@voiceflow/common';

import type { Utils } from '../node';

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

export enum GlobalNoMatchType {
  STATIC = 'static',
  GENERATIVE = 'generative',
}

export interface Settings<Prompt = unknown> {
  error: Nullable<Prompt>;
  repeat: RepeatType;
  session: Session<Prompt>;
  defaultCanvasNodeVisibility: Nullable<Utils.CanvasNodeVisibility>;
  defaultCarouselLayout?: Nullable<CarouselLayout>;
  defaultVoice?: Nullable<string>;

  deepgramASR?: any;

  globalNoReply?: {
    prompt?: Nullable<Prompt> | undefined;
    delay?: number | undefined;
    enabled?: boolean;
  };

  globalNoMatch?:
    | {
        type: GlobalNoMatchType.STATIC;
        prompt: Nullable<Prompt> | undefined;
      }
    | {
        type: GlobalNoMatchType.GENERATIVE;
        prompt: AIModelParams;
      };

  intentConfidence?: number;
}

export const defaultSettings = <Prompt>({
  error = null,
  repeat = RepeatType.ALL,
  session = { type: SessionType.RESTART },
  defaultVoice = null,
  defaultCanvasNodeVisibility = null,
  defaultCarouselLayout = null,

  globalNoMatch = { type: GlobalNoMatchType.STATIC, prompt: undefined },
  globalNoReply = { delay: undefined, prompt: undefined, enabled: true },

  deepgramASR,

  intentConfidence = 0.6,
}: Partial<Settings<Prompt>> = {}): Settings<Prompt> => ({
  error,
  repeat,
  session,
  defaultVoice,
  defaultCanvasNodeVisibility,
  defaultCarouselLayout,

  globalNoMatch,
  globalNoReply,

  deepgramASR,

  intentConfidence,
});
