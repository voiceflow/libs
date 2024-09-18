import type { BaseElement, BaseText } from 'slate';

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export enum TextProperty {
  BACKGROUND_COLOR = 'backgroundColor',
  COLOR = 'color',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
  FONT_WEIGHT = 'fontWeight',
  FONT_FAMILY = 'fontFamily',
  STRIKE_THROUGH = 'strikeThrough',
}

export enum ElementType {
  LINK = 'link',
  VARIABLE = 'variable',
}

export enum ElementProperty {
  TEXT_ALIGN = 'textAlign',
}

export interface Text extends BaseText {
  [TextProperty.BACKGROUND_COLOR]?: Color;
  [TextProperty.COLOR]?: Color;
  [TextProperty.ITALIC]?: boolean;
  [TextProperty.UNDERLINE]?: boolean;
  [TextProperty.FONT_WEIGHT]?: string;
  [TextProperty.FONT_FAMILY]?: string;
  [TextProperty.STRIKE_THROUGH]?: boolean;
}

export interface Element extends BaseElement {
  type?: string;
  children: Descendant[];
  [ElementProperty.TEXT_ALIGN]?: string;
}

export interface LinkElement extends Element {
  type: ElementType.LINK;
  url?: string;
}

export interface VariableElement extends Element {
  type: ElementType.VARIABLE;
  id: string;
  name: string;
  isSlot?: boolean;
  isSecret?: boolean;
}

export type AnyElement = Element | LinkElement | VariableElement;

export type Descendant = AnyElement | Text;

export type SlateTextValue = Descendant[];

export const isVariableElement = (element: Element): element is VariableElement => {
  return element.type === ElementType.VARIABLE;
};

export const isLinkElement = (element: Element): element is LinkElement => {
  return element.type === ElementType.LINK;
};
