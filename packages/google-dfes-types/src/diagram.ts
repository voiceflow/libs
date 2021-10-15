/* eslint-disable @typescript-eslint/no-empty-interface */
import { BaseBlock, Diagram } from '@voiceflow/base-types';

import { AnyGoogleDFESStep } from './node';

export interface GoogleDiagram extends Diagram<BaseBlock | AnyGoogleDFESStep> {}
