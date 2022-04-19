import { BaseNode } from '@voiceflow/base-types';

import { ChatNode, ChatStep, ChatStepData } from './chat';

export * from './chat';

export type Step = ChatStep;

export type StepPorts = BaseNode.CardV2.StepPorts;

export type StepData = ChatStepData;

export type Node = ChatNode;
