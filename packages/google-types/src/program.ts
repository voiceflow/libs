/* eslint-disable @typescript-eslint/no-empty-interface */

import { Models } from '@voiceflow/base-types';

import { AnyGoogleCommand, AnyGoogleNode } from './node';

export interface GoogleProgram extends Models.Program<AnyGoogleNode, AnyGoogleCommand> {}
