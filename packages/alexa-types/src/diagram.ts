/* eslint-disable @typescript-eslint/no-empty-interface */

import { Diagram } from '@voiceflow/api-sdk';

import { AnyAlexaStep } from './node';

export interface AlexaDiagram extends Diagram<AnyAlexaStep> {}
