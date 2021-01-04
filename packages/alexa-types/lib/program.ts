import { Program } from '@voiceflow/api-sdk';

import { AlexaCommand, AlexaNodes } from './nodes';

export type AlexaProgram = Program<AlexaNodes, AlexaCommand>;
