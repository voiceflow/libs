import { Node } from '@voiceflow/base-types';

import * as Capture from './capture';
import * as Interaction from './interaction';
import * as Prompt from './prompt';
import * as Speak from './speak';
import * as Stream from './stream';
import * as Visual from './visual';

export * as Capture from './capture';
export * as Interaction from './interaction';
export * as Prompt from './prompt';
export * as Speak from './speak';
export * as Stream from './stream';
export * as Visual from './visual';

export type AnyGoogleExtendedStep = Speak.Step | Prompt.Step | Capture.Step | Interaction.Step | Stream.Step | Visual.Step;
export type AnyGoogleExtendedNode = Speak.Node | Capture.Node | Interaction.Node | Stream.Node | Visual.Node;

export type AnyGoogleStep = Node.AnyCommonStep | AnyGoogleExtendedStep;
export type AnyGoogleNode = Node.AnyCommonNode | AnyGoogleExtendedNode;

export type AnyGoogleCommand = Node.AnyCommonCommand;
