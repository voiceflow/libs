import { Program } from '@voiceflow/api-sdk';

import { AlexaCommand, AlexaNodes } from './node';

export type AlexaProgram = Program<AlexaNodes, AlexaCommand>;
