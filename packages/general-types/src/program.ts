/* eslint-disable @typescript-eslint/no-empty-interface */

import { Program } from '@voiceflow/api-sdk';

import { AnyGeneralCommand, AnyGeneralNode } from './node';

export interface GeneralProgram extends Program<AnyGeneralNode, AnyGeneralCommand> {}
