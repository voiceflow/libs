import { CarouselLayout } from '@base-types/node/carousel';
import { AIModelParams } from '@base-types/utils/ai';
import { Nullable } from '@voiceflow/common';

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

  globalNoReply?: {
    prompt?: Nullable<Prompt> | undefined;
    delay?: number | undefined;
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
}

export const defaultSettings = <Prompt>({
  error = null,
  repeat = RepeatType.ALL,
  session = { type: SessionType.RESTART },
  defaultCanvasNodeVisibility = null,
  defaultCarouselLayout = null,

  globalNoMatch = { type: GlobalNoMatchType.STATIC, prompt: undefined },
  globalNoReply = { delay: undefined, prompt: undefined },
}: Partial<Settings<Prompt>> = {}): Settings<Prompt> => ({
  error,
  repeat,
  session,
  defaultCanvasNodeVisibility,
  defaultCarouselLayout,

  globalNoMatch,
  globalNoReply,
});
