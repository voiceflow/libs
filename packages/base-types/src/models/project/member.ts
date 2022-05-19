import { AnyRecord } from '@voiceflow/common';

export interface Member<P extends AnyRecord = AnyRecord> {
  creatorID: number;
  platformData: P;
}
