import * as s from 'superstruct';

import { Node, NodeID, SCommand, SNode, SNodeID, SProgramID, SVariable, SVersionID } from './shared';

export const SProgram = s.object({
  id: SProgramID,
  startId: SNodeID,
  versionId: SVersionID,

  lines: s.record(SNodeID, SNode),
  commands: s.array(SCommand),
  variables: s.array(SVariable),
});

export type Program<N extends Node = Node> = Omit<s.StructType<typeof SProgram>, 'lines'> & {
  lines: Record<NodeID, N>;
};
