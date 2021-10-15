import { AnyRecord } from '@voiceflow/api-sdk';

import { CreatorID } from './shared';

export interface Member<P extends AnyRecord = AnyRecord>{
  creatorID: CreatorID;
  platformData: P;
}
