import { Nullable } from '@voiceflow/common';

import { Variable } from './common';

export interface SlotType {
  value?: string;
}

export interface Slot {
  key: string;
  name: string;
  type: SlotType;
  color?: string;
  inputs: string[];
}

export interface SlotMapping {
  slot: Nullable<string>;
  variable: Nullable<Variable>;
}
