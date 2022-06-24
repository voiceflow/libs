import { ConversationStartLog } from './global/conversationStart';
import { NluIntentResolvedLog } from './global/nluIntentResolved';
import { ApiStepLog } from './steps/api';
import { ButtonsStepLog } from './steps/buttons';
import { CaptureStepLog } from './steps/capture';
import { CodeStepLog } from './steps/code';
import { ConditionStepLog } from './steps/condition';
import { CustomActionStepLog } from './steps/customAction';
import { ExitStepLog } from './steps/exit';
import { FlowStepLog } from './steps/flow';
import { IntentStepLog } from './steps/intent';
import { RandomStepLog } from './steps/random';
import { SetStepLog } from './steps/set';
import { SpeakStepLog } from './steps/speak';
import { StartStepLog } from './steps/start';
import { TextStepLog } from './steps/text';

export {
  ApiStepLog,
  ButtonsStepLog,
  CaptureStepLog,
  CodeStepLog,
  ConditionStepLog,
  ConversationStartLog,
  CustomActionStepLog,
  ExitStepLog,
  FlowStepLog,
  IntentStepLog,
  RandomStepLog,
  SetStepLog,
  SpeakStepLog,
  StartStepLog,
  TextStepLog,
};

/** All possible runtime logs for global events. */
export type GlobalLog = ConversationStartLog | NluIntentResolvedLog;

/** All possible runtime logs for steps. */
export type StepLog =
  | ApiStepLog
  | ButtonsStepLog
  | CaptureStepLog
  | CodeStepLog
  | ConditionStepLog
  | CustomActionStepLog
  | ExitStepLog
  | FlowStepLog
  | IntentStepLog
  | RandomStepLog
  | SetStepLog
  | SpeakStepLog
  | StartStepLog
  | TextStepLog;
