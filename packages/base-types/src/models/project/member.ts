import { AnyRecord } from '@/types';

export interface Member<P extends AnyRecord = AnyRecord> {
  creatorID: number;
  platformData: P;
}
