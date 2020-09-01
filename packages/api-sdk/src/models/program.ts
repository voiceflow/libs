import * as s from 'superstruct';

import { Command, Node, NodeID, SCommand, SNode, SNodeID, SProgramID, SVariable, SVersionID } from './shared';

export const SProgram = s.object({
  id: SProgramID,
  startId: SNodeID,
  skill_id: SVersionID,

  lines: s.record(SNodeID, SNode),
  commands: s.array(SCommand),
  variables: s.array(SVariable),
});

export type Program<N extends Node = Node, C extends Command = Command> = Omit<s.StructType<typeof SProgram>, 'lines' | 'commands'> & {
  lines: Record<NodeID, N>;
  commands: C[];
};
