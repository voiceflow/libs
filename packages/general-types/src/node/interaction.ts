import { Button, Node as BaseNode, Request } from '@voiceflow/base-types';
import { Node } from '@voiceflow/voice-types';

import { Voice } from '@/constants';

export interface StepData extends Node.Interaction.StepData<Voice>, Button.StepButton {}

export interface Step extends Node.Interaction.Step<StepData> {}

export interface Node<Event = BaseNode.Utils.BaseEvent> extends Node.Interaction.Node<Event>, Request.NodeButton {}
