/* eslint-disable @typescript-eslint/no-empty-interface */
import { Models } from '@voiceflow/base-types';

import { AnyAlexaCommand, AnyAlexaNode } from './node';

export interface AlexaProgram extends Models.Program<AnyAlexaNode, AnyAlexaCommand> {}
