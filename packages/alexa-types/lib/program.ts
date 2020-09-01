import { Program } from '@voiceflow/api-sdk';

import { AlexaCommands, AlexaNodes } from './nodes';

export type AlexaProgram = Program<AlexaNodes, AlexaCommands>;
