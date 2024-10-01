import type { Intent } from './intent';
import type { Slot } from './slot';

export interface PrototypeModel {
  slots: Slot[];
  intents: Intent[];
  ragNLUId?: string;
}
