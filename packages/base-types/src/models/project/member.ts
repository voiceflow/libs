import { AnyRecord } from '@/utils';

export interface Member<P extends AnyRecord = AnyRecord> {
  creatorID: number;
  platformData: P;
}
