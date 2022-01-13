import { Models } from '@voiceflow/base-types';

import { AnyGoogleDFESCommand, AnyGoogleDFESNode } from './node';

export interface GoogleProgram extends Models.Program<AnyGoogleDFESNode, AnyGoogleDFESCommand> {}
