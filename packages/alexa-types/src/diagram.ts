/* eslint-disable @typescript-eslint/no-empty-interface */

import { Diagram } from '@voiceflow/base-types';

import { AnyAlexaStep } from './node';

export interface AlexaDiagram extends Diagram<AnyAlexaStep> {}
