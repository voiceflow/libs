import { Nullable } from '@voiceflow/api-sdk';

export interface StepReprompt<Prompt> {
  reprompt: Nullable<Prompt>;
}

export interface NodeReprompt<Prompt> {
  reprompt?: Prompt;
}
