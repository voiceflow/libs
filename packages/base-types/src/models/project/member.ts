import { AnyRecord } from '@base-types/types';

export interface Member<P extends AnyRecord = AnyRecord> {
  creatorID: number;
  platformData: P;
}
