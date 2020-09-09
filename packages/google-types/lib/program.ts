import { Program } from '@voiceflow/api-sdk';

import { GoogleCommands, GoogleNodes } from './nodes';

export type GoogleProgram = Program<GoogleNodes, GoogleCommands>;
