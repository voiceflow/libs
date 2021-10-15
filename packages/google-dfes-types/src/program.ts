/* eslint-disable @typescript-eslint/no-empty-interface */

import { Program } from '@voiceflow/base-types';

import { AnyGoogleDFESCommand, AnyGoogleDFESNode } from './node';

export interface GoogleProgram extends Program<AnyGoogleDFESNode, AnyGoogleDFESCommand> {}
