/* eslint-disable @typescript-eslint/no-empty-interface */

import { Models } from '@voiceflow/base-types';

import { AnyGeneralCommand, AnyGeneralNode } from './node';

export interface GeneralProgram extends Models.Program<AnyGeneralNode, AnyGeneralCommand> {}
