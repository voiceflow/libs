/* eslint-disable @typescript-eslint/no-empty-interface */

import { Program } from '@voiceflow/api-sdk';

import { AnyGoogleDFESCommand, AnyGoogleDFESNode } from './node';

export interface GoogleProgram extends Program<AnyGoogleDFESNode, AnyGoogleDFESCommand> {}
