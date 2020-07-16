import * as t from 'io-ts';

import { Platform } from '@/constants';
import { stringEnum } from '@/utils';

export const TTeamID = t.number;

export const TWorkspaceID = TTeamID;

export const TBlockID = t.string;

export const TVariable = t.string;

export const TTimestamp = t.number;

export const TProjectID = t.string;

export const TCreatorID = t.number;

export const TVersionID = t.string;

export const TPlatform = stringEnum(Platform);
