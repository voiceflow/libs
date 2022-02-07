import { ChatNode } from '@voiceflow/chat-types';

/** @deprecated */
export interface ChatStepData extends ChatNode.Capture.StepData {}

/** @deprecated */
export interface ChatStep extends ChatNode.Capture.Step<ChatStepData> {}

/** @deprecated */
export interface ChatNode extends ChatNode.Capture.Node {}
