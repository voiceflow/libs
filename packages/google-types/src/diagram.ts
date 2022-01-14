import { Models } from '@voiceflow/base-types';

import { AnyGoogleStep } from './node';

export interface GoogleDiagram extends Models.Diagram<Models.BaseBlock | AnyGoogleStep> {}
