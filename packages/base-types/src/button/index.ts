import { Nullable } from '@voiceflow/common';

export enum ButtonType {
  INTENT = 'INTENT',
}

export enum ButtonsLayout {
  STACKED = 'stacked',
  CAROUSEL = 'carousel',
}

/**
 * @deprecated Use BaseButton instead
 */
export interface Chip {
  label: string;
}

export interface BaseButton<T> {
  type: ButtonType;
  name: string;
  payload: T;
}

export interface IntentButton extends BaseButton<{ intentID: Nullable<string> }> {
  type: ButtonType.INTENT;
}

// will be union in future
export type AnyButton = IntentButton;

export interface StepButtonsLayout {
  buttonsLayout?: Nullable<ButtonsLayout>;
}

export interface StepButton extends StepButtonsLayout {
  /**
   * @deprecated Use buttons
   */
  chips: Nullable<Chip[]>;

  buttons?: Nullable<AnyButton[]>;
}
