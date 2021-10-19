/* eslint-disable @typescript-eslint/no-empty-interface */
import { Models } from '@voiceflow/base-types';

import { AnyGoogleStep } from './node';

export interface GoogleDiagram extends Models.Diagram<Models.BaseBlock | AnyGoogleStep> {}
