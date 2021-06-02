import * as s from 'superstruct';

import { BaseCommand, BaseNode, NodeID, SCommand, SNode, SNodeID, SProgramID, SVariable, SVersionID } from './shared';

export const SProgram = s.object({
  id: SProgramID,
  startId: SNodeID,
  skill_id: SVersionID,

  lines: s.record(SNodeID, SNode),
  commands: s.array(SCommand),
  variables: s.array(SVariable),
});

export interface Program<N extends BaseNode = BaseNode, C extends BaseCommand = BaseCommand>
  extends Omit<s.StructType<typeof SProgram>, 'lines' | 'commands'> {
  lines: Record<NodeID, N>;
  commands: C[];
}
