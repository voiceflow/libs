import { Intent } from './intent';
import { Slot } from './slot';

export * from './slot';
export * from './intent';

export type GeneralVersionData = {
  slots: Slot[];
  intents: Intent[];
  settings: {};
  publishing: {};
};

export const defaultGeneralVersionData = ({
  slots = [],
  intents = [],
  settings = {},
  publishing = {},
}: Partial<GeneralVersionData>): GeneralVersionData => ({
  slots,
  intents,
  settings,
  publishing,
});
