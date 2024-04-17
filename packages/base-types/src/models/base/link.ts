import type { Nullable } from '@voiceflow/common';

import type { Point } from './node';

export enum LinkType {
  CURVED = 'CURVED',
  STRAIGHT = 'STRAIGHT',
}

export interface PathPoint {
  point: Point;
  toTop?: boolean;
  locked?: boolean;
  reversed?: boolean;
  allowedToTop?: boolean;
}

export interface LinkDataCaption {
  value: string;
  width: number;
  height: number;
}

export interface LinkData {
  type?: Nullable<LinkType>;
  color?: Nullable<string>;
  points?: Nullable<PathPoint[]>;
  caption?: Nullable<LinkDataCaption>;
}
