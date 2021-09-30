import { Node as BaseNode } from '@voiceflow/base-types';
import { Node } from '@voiceflow/google-types';

import * as Buttons from './buttons';
import * as Payload from './payload';
import * as Visual from './visual';

export * as Buttons from './buttons';
export * from './constants';
export * as Payload from './payload';
export * as Visual from './visual';

export type AnyGoogleDFESOnlyStep = Payload.Step | Visual.Step | Buttons.Step;
export type AnyGoogleDFESOnlyNode = Payload.Node | Visual.Node;

export type AnyGoogleDFESStep = BaseNode.AnyCommonStep | Exclude<Node.AnyGoogleExtendedStep, Node.Stream.Step> | AnyGoogleDFESOnlyStep;
export type AnyGoogleDFESNode = BaseNode.AnyCommonNode | Exclude<Node.AnyGoogleExtendedNode, Node.Stream.Node> | AnyGoogleDFESOnlyNode;

export type AnyGoogleDFESCommand = Node.AnyGoogleCommand;
