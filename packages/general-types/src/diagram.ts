/* eslint-disable @typescript-eslint/no-empty-interface */

import { BaseBlock, Diagram } from '@voiceflow/base-types';

import { AnyGeneralStep } from './node';

export interface GeneralDiagram extends Diagram<BaseBlock | AnyGeneralStep> {}
