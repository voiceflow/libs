import * as s from 'superstruct';

import { UnknownRecord } from '@/types';
import { dynamicObject } from '@/utils';

import { SCreatorID, SDiagramID, SName, SProjectID, SVariable, SVersionID } from './shared';

export const SVersionPlatformDataSettings = s.object();

export const SVersionPlatformDataPublishing = s.object();

export const SVersionPlatformData = dynamicObject({
  settings: SVersionPlatformDataSettings,
  publishing: SVersionPlatformDataPublishing,
});

export const SVersion = s.object({
  _id: SVersionID,
  creatorID: SCreatorID,
  projectID: SProjectID,

  name: SName,
  variables: s.array(SVariable),
  platformData: SVersionPlatformData,
  rootDiagramID: SDiagramID,
});

export type VersionPlatformData<S extends UnknownRecord = UnknownRecord, P extends UnknownRecord = UnknownRecord> = UnknownRecord & {
  settings: S;
  publishing: P;
};

export type Version<P extends VersionPlatformData> = s.StructType<typeof SVersion> & {
  platformData: P;
};
