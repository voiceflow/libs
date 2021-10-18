import { Nullable } from '@/models/utils';

export interface StepReprompt<Prompt> {
  reprompt: Nullable<Prompt>;
}

export interface NodeReprompt<Prompt> {
  reprompt?: Prompt;
}
