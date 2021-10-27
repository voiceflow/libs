/* eslint-disable @typescript-eslint/no-empty-interface */

import { Models } from '@voiceflow/base-types';

import { AnyGeneralStep } from './node';

export interface GeneralDiagram extends Models.Diagram<Models.BaseBlock | AnyGeneralStep> {}
