import { Node } from '@voiceflow/base-types';

import * as Buttons from './buttons';
import * as Capture from './capture';
import * as Interaction from './interaction';
import * as Prompt from './prompt';
import * as Speak from './speak';
import * as Stream from './stream';

export * as Buttons from './buttons';
export * as Capture from './capture';
export * as Interaction from './interaction';
export * as Prompt from './prompt';
export * as Speak from './speak';
export * as Stream from './stream';

export type AnyGoogleExtendedStep = Speak.Step | Prompt.Step | Capture.Step | Interaction.Step | Stream.Step | Buttons.Step;
export type AnyGoogleExtendedNode = Speak.Node | Capture.Node | Interaction.Node | Stream.Node;

export type AnyGoogleStep = Node.AnyCommonStep | AnyGoogleExtendedStep | Node.Card.Step;
export type AnyGoogleNode = Node.AnyCommonNode | AnyGoogleExtendedNode | Node.Card.Node;

export type AnyGoogleCommand = Node.AnyCommonCommand;
