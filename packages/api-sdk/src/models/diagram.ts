import * as s from 'superstruct';

import { BaseDiagramNode, NodeID, SCreatorID, SDiagramID, SDiagramNode, SName, SNodeID, STimestamp, SVariable, SVersionID } from './shared';

export enum DiagramType {
  TOPIC = 'TOPIC',
  GROUP = 'GROUP',
  COMPONENT = 'COMPONENT',
}

export const SDiagramType = s.enums(Object.values(DiagramType));

export const SDiagram = s.object({
  _id: SDiagramID,

  name: SName,
  type: s.optional(SDiagramType),
  versionID: SVersionID,
  creatorID: SCreatorID,
  variables: s.array(SVariable),

  offsetX: s.number(),
  offsetY: s.number(),
  zoom: s.number(),
  nodes: s.record(SNodeID, SDiagramNode),
  intentStepIDs: s.optional(s.array(s.string())),

  children: s.array(SDiagramID),

  modified: STimestamp,
});

export interface Diagram<N extends BaseDiagramNode = BaseDiagramNode> extends Omit<s.StructType<typeof SDiagram>, 'nodes'> {
  nodes: Record<NodeID, N>;
}
