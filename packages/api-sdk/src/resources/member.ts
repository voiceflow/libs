import * as t from 'io-ts';

import { TCreatorID, TProjectID } from '@/validations';

export const TMember = t.type({
  projectID: TProjectID,
  creatorID: TCreatorID,
});
