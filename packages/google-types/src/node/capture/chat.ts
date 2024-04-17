import type { ChatNode } from '@voiceflow/chat-types';

import type { SharedNode } from './base';

/** @deprecated */
export interface ChatStepData extends ChatNode.Capture.StepData {}

/** @deprecated */
export interface ChatStep extends ChatNode.Capture.Step<ChatStepData> {}

/** @deprecated */
export interface ChatNode extends Omit<ChatNode.Capture.Node, 'buttons'>, SharedNode {}
