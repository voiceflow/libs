import { Node, Step } from '@voiceflow/api-sdk';

import { NodeType } from './types';

export type FlowStep = Step<NodeType.FLOW, { diagramID: string }>;

export type FlowNode = Node<
  NodeType.FLOW,
  {
    diagram_id: string;
    variable_map?: {
      inputs?: [string, string][];
      outputs?: [string, string][];
    };
    nextId?: string | null;
  }
>;
