import { BaseCommand, BaseNode, Variable } from './base';

export interface Model<Node extends BaseNode = BaseNode, Command extends BaseCommand = BaseCommand> {
  id: string;
  startId: string;
  skill_id: string;

  name?: string;
  lines: Record<string, Node>;
  commands: Command[];
  variables: Variable[];
}
