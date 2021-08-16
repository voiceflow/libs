import { Node as BaseNode } from '@voiceflow/base-types';
import { Node } from '@voiceflow/google-types';

import * as DFESPayload from './dfESPayload';

export * from './constants';
export * as DFESPayload from './dfESPayload';

export type AnyGoogleDFESOnlyStep = DFESPayload.Step;
export type AnyGoogleDFESOnlyNode = DFESPayload.Node;

export type AnyGoogleDFESStep = BaseNode.AnyCommonStep | Exclude<Node.AnyGoogleExtendedStep, Node.Stream.Step> | AnyGoogleDFESOnlyStep;
export type AnyGoogleDFESNode = BaseNode.AnyCommonNode | Exclude<Node.AnyGoogleExtendedNode, Node.Stream.Node> | AnyGoogleDFESOnlyNode;

export type AnyGoogleDFESCommand = Node.AnyGoogleCommand;
