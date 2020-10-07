import { Intent } from './intent';
import { Slot } from './slot';

export * from './slot';
export * from './intent';

export type GeneralVersionData = {
  slots: Slot[];
  intents: Intent[];
};

export const defaultGeneralVersionData = ({ slots = [], intents = [] }: Partial<GeneralVersionData>): GeneralVersionData => ({
  slots,
  intents,
});
