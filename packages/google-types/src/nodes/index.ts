import * as DFESImage from '@voiceflow/general-types/build/nodes/visual';

import * as Capture from './capture';
import * as Card from './card';
import * as Command from './command';
import * as Intent from './intent';
import * as Interaction from './interaction';
import * as Stream from './stream';

export * from './types';

// gactions
export type GoogleSteps = Card.Step | Stream.Step | Command.Step | Interaction.Step | Intent.Step | Capture.Step;

export type GoogleNodes = Card.Node | Stream.Node | Interaction.Node | Capture.Node;

export type GoogleCommand = Command.Command | Intent.Command;

// dialogflow es
export type DialogflowESSteps = Card.Step | Command.Step | Interaction.Step | Intent.Step | Capture.Step | DFESImage.Step;
export type DialogflowESNodes = Card.Node | Interaction.Node | Capture.Node | DFESImage.Node;
