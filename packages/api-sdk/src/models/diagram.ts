import * as s from 'superstruct';

import { Node, SCreatorID, SDiagramID, SName, SNode, SVariable, SVersionID } from './shared';

export const SDiagram = s.object({
  _id: SDiagramID,

  name: SName,
  versionID: SVersionID,
  creatorID: SCreatorID,
  variables: s.array(SVariable),

  offsetX: s.number(),
  offsetY: s.number(),
  zoom: s.number(),
  nodes: s.array(SNode),
});

export type Diagram<N extends Node = Node> = Omit<s.StructType<typeof SDiagram>, 'nodes'> & {
  nodes: N[];
};
