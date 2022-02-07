import { BaseNode } from '@voiceflow/base-types';
import { GoogleNode } from '@voiceflow/google-types';

import * as Payload from './payload';
import * as Visual from './visual';

export * from './constants';
export * as Payload from './payload';
export * as Visual from './visual';

export type AnyOnlyStep = Payload.Step | Visual.Step;
export type AnyOnlyNode = Payload.Node | Visual.Node;

export type AnyStep = BaseNode.AnyCommonStep | Exclude<GoogleNode.AnyExtendedStep, GoogleNode.Stream.Step> | AnyOnlyStep;
export type AnyNode = BaseNode.AnyCommonNode | Exclude<GoogleNode.AnyExtendedNode, GoogleNode.Stream.Node> | AnyOnlyNode;

export type AnyCommand = GoogleNode.AnyCommand;
