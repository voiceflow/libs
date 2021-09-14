/* eslint-disable @typescript-eslint/no-empty-interface */
import { Program } from '@voiceflow/api-sdk';

import { AnyAlexaCommand, AnyAlexaNode } from './node';

export interface AlexaProgram extends Program<AnyAlexaNode, AnyAlexaCommand> {}
