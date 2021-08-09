import { BaseElement, BaseText } from 'slate';

import { CanvasNodeVisibility } from '@/types';

import { BaseNode, BaseStep, BaseTraceFrame, NodeID, NodeType, TraceType } from './types';

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export enum TextProperty {
  COLOR = 'color',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
  FONT_WEIGHT = 'fontWeight',
  FONT_FAMILY = 'fontFamily',
  STRIKE_THROUGH = 'strikeThrough',
}

export enum ElementType {
  LINK = 'link',
}

export enum ElementProperty {
  TEXT_ALIGN = 'textAlign',
}

export interface Text extends BaseText {
  [TextProperty.COLOR]?: Color;
  [TextProperty.ITALIC]?: boolean;
  [TextProperty.UNDERLINE]?: boolean;
  [TextProperty.FONT_WEIGHT]?: string;
  [TextProperty.FONT_FAMILY]?: string;
  [TextProperty.STRIKE_THROUGH]?: boolean;
}

export interface Element extends BaseElement {
  type?: ElementType;
  children: Descendant[];
  [ElementProperty.TEXT_ALIGN]?: string;
}

export interface LinkElement extends Element {
  type: ElementType.LINK;
  url?: string;
}

export type AnyElement = Element | LinkElement;

export type Descendant = AnyElement | Text;

export interface TextData {
  id: string;
  content: Descendant[];
}

export interface StepData {
  texts: TextData[];
  canvasVisibility?: CanvasNodeVisibility;
}

export interface Step extends BaseStep<StepData> {
  type: NodeType.TEXT;
}

export interface TextNodeData {
  id: string;
  html: string;
}

export interface Node extends BaseNode {
  type: NodeType.TEXT;
  texts: TextNodeData[];
  nextId?: NodeID;
}

export interface TraceFrame extends BaseTraceFrame<TextNodeData> {
  type: TraceType.TEXT;
}
