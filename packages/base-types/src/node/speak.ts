/* eslint-disable camelcase */

import { Nullable } from '@voiceflow/api-sdk';

import { NodeType } from './constants';
import { BaseNode, BaseStep, BaseTraceFrame, NodeNextID, StepCanvasNodeVisibility, TraceType } from './utils';

export interface StepDataDialog<D> {
  dialogs: D[];
}

export interface StepData extends StepCanvasNodeVisibility {
  randomize: boolean;
}

export interface Step<D extends StepData = StepData> extends BaseStep<D> {
  type: NodeType.SPEAK;
}

export interface SpeakNode<S> {
  speak: S;
}

export interface RandomSpeakNode<S> {
  random_speak: S[];
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
