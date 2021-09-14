/* eslint-disable @typescript-eslint/no-empty-interface */

import { BaseBlock, Diagram } from '@voiceflow/api-sdk';

import { AnyGeneralStep } from './node';

export interface GeneralDiagram extends Diagram<BaseBlock | AnyGeneralStep> {}
