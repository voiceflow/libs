import * as Flow from './flow';
import * as Speak from './speak';

export * from './types';

export type AlexaSteps = Speak.Step | Flow.Step;

export type AlexaNodes = Speak.Node | Flow.Node;
