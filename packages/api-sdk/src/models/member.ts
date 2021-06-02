import * as s from 'superstruct';

import { AnyRecord } from '@/types';

import { SBasePlatformData, SCreatorID } from './shared';

export const SMember = s.object({
  creatorID: SCreatorID,
  platformData: SBasePlatformData,
});

export interface Member<P extends AnyRecord = AnyRecord> extends Omit<s.StructType<typeof SMember>, 'platformData'> {
  platformData: P;
}
