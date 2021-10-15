import { BaseCommand, BaseNode, NodeID, ProgramID, Variable, VersionID } from './shared';

export interface Program<N extends BaseNode = BaseNode, C extends BaseCommand = BaseCommand> {
  id: ProgramID;
  startId: NodeID;
  skill_id: VersionID; // eslint-disable-line camelcase
  name?: string;
  variables: Variable[];
  lines: Record<NodeID, N>;
  commands: C[];
}
