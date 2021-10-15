/* eslint-disable @typescript-eslint/no-empty-interface */

import { Program } from '@voiceflow/base-types';

import { AnyGoogleCommand, AnyGoogleNode } from './node';

export interface GoogleProgram extends Program<AnyGoogleNode, AnyGoogleCommand> {}
