import { Intent } from './intent';
import { Slot } from './slot';

export interface PrototypeModel {
  slots: Slot[];
  intents: Intent[];
}
