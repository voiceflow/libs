import { Nullable } from '@voiceflow/api-sdk';

export interface StepReprompt<R> {
  reprompt: Nullable<R>;
}

export interface NodeReprompt<R> {
  reprompt?: R;
}
