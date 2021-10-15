import { CreatorID } from './shared';

export interface Member<P extends Record<string, any> = Record<string, any>> {
  creatorID: CreatorID;
  platformData: P;
}
