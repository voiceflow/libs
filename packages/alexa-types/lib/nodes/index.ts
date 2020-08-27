import * as Flow from './flow';
import * as Interaction from './interaction';
import * as Speak from './speak';
import * as Start from './start';

export * from './types';

export type AlexaSteps = Start.Step | Speak.Step | Flow.Step | Interaction.Step;

export type AlexaNodes = Start.Node | Speak.Node | Flow.Node | Interaction.Node;
