/* eslint-disable @typescript-eslint/no-empty-interface */
import { BaseBlock, Diagram } from '@voiceflow/api-sdk';

import { AnyGoogleStep } from './node';

export interface GoogleDiagram extends Diagram<BaseBlock | AnyGoogleStep> {}
