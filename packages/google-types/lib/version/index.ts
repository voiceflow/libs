import { Version } from '@voiceflow/api-sdk';

import { Intent } from './intent';
import { defaultGooglePublishing, GooglePublishing } from './publishing';
import { defaultGoogleSettings, GoogleSettings } from './settings';
import { Slot } from './slot';

export * from './slot';
export * from './intent';
export * from './publishing';
export * from './settings';

export enum GoogleStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export type GoogleVersionData = {
  slots: Slot[];
  intents: Intent[];

  settings: GoogleSettings;
  publishing: GooglePublishing;

  status: {
    stage: GoogleStage;
  };
};

export type GoogleVersion = Version<GoogleVersionData>;

export const defaultGoogleVersionData = ({
  slots = [],
  intents = [],
  settings,
  publishing,
  status: { stage = GoogleStage.DEV } = {} as any,
}: Partial<GoogleVersionData>): GoogleVersionData => ({
  slots,
  intents,
  settings: defaultGoogleSettings(settings),
  publishing: defaultGooglePublishing(publishing),
  status: {
    stage,
  },
});
