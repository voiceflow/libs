/* eslint-disable @typescript-eslint/no-empty-interface */

import { Program } from '@voiceflow/api-sdk';

import { AnyGoogleCommand, AnyGoogleNode } from './node';

export interface GoogleProgram extends Program<AnyGoogleNode, AnyGoogleCommand> {}
