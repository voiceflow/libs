import type { BaseNode } from '@voiceflow/base-types';
import type { GoogleNode } from '@voiceflow/google-types';

import type * as Payload from './payload';
import type * as Visual from './visual';

export * from './constants';
export * as Payload from './payload';
export * as Visual from './visual';

export type AnyOnlyStep = Payload.Step | Visual.Step;
export type AnyOnlyNode = Payload.Node | Visual.Node;

export type AnyStep =
  | BaseNode.AnyCommonStep
  | Exclude<GoogleNode.AnyExtendedStep, GoogleNode.Stream.Step>
  | AnyOnlyStep;
export type AnyNode =
  | BaseNode.AnyCommonNode
  | Exclude<GoogleNode.AnyExtendedNode, GoogleNode.Stream.Node>
  | AnyOnlyNode;

export type AnyCommand = GoogleNode.AnyCommand;
