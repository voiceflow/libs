import type { Nullable } from '@voiceflow/common';

import type { NodeType } from './constants';
import type {
  BaseNode,
  BaseResponseTrace,
  BaseStep,
  BaseTraceFrame,
  NodeNextID,
  StepCanvasNodeVisibility,
  TraceType,
} from './utils';

export interface StepDataDialog<Dialog> {
  dialogs: Dialog[];
}

export interface StepData extends StepCanvasNodeVisibility {
  randomize: boolean;
}

export interface Step<Data = StepData> extends BaseStep<Data> {
  type: NodeType.SPEAK;
}

export interface SpeakNode<Speak> {
  speak: Speak;
}

export interface RandomSpeakNode<Speak> {
  random_speak: Speak[];
}

export interface Node extends BaseNode, NodeNextID {
  type: NodeType.SPEAK;
}

export enum TraceSpeakType {
  AUDIO = 'audio',
  MESSAGE = 'message',
}

export interface TraceFramePayload extends BaseResponseTrace {
  src?: Nullable<string>;
  type: TraceSpeakType;
  voice?: string;
  isPrompt?: boolean;
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.SPEAK;
}
