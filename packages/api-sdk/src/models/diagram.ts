import * as s from 'superstruct';

import { BaseDiagramNode, NodeID, SCreatorID, SDiagramID, SDiagramNode, SName, SNodeID, STimestamp, SVariable, SVersionID } from './shared';

export const SDiagram = s.object({
  _id: SDiagramID,

  name: SName,
  versionID: SVersionID,
  creatorID: SCreatorID,
  variables: s.array(SVariable),

  offsetX: s.number(),
  offsetY: s.number(),
  zoom: s.number(),
  nodes: s.record(SNodeID, SDiagramNode),

  children: s.array(SDiagramID),

  modified: STimestamp,
});

export interface Diagram<N extends BaseDiagramNode = BaseDiagramNode> extends Omit<s.StructType<typeof SDiagram>, 'nodes'> {
  nodes: Record<NodeID, N>;
}
