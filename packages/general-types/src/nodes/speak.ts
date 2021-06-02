/* eslint-disable camelcase */

import { Nullable } from '@voiceflow/api-sdk';

import { CanvasNodeVisibility, Prompt } from '@/types';

import { BaseNode, BaseStep, BaseTraceFrame, NodeID, NodeType, TraceType } from './types';

export interface StepData<V> {
  dialogs: Prompt<V>[];
  randomize: boolean;
  canvasVisibility?: CanvasNodeVisibility;
}

export enum SpeakType {
  AUDIO = 'audio',
  MESSAGE = 'message',
}

export interface Step<V> extends BaseStep<StepData<V>> {
  type: NodeType.SPEAK;
}

export interface BaseSpeak extends BaseNode {
  type: NodeType.SPEAK;
  prompt?: string;
  nextId?: NodeID;
}

export interface SpeakNode extends BaseSpeak {
  speak: string;
}

export interface RandomSpeakNode extends BaseSpeak {
  random_speak: string[];
}

export type Node = SpeakNode | RandomSpeakNode;

export interface TraceFramePayload {
  message: string;
  type: SpeakType;
  voice?: string;
  src?: Nullable<string>;
}

export interface TraceFrame extends BaseTraceFrame<TraceFramePayload> {
  type: TraceType.SPEAK;
}
