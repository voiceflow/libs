/* eslint-disable camelcase */

import { Nullable } from '@/models/utils';

import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, NodeNextID, StepCanvasNodeVisibility, TraceType } from './utils';

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

export interface TraceFramePayload {
  src?: Nullable<string>;
  type: TraceSpeakType;
  voice?: string;
  message: string;
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.SPEAK;
}
