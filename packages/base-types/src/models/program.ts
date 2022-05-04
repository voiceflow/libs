import { BaseCommand, BaseNode, Variable } from './base';

export interface Model<Node extends BaseNode = BaseNode, Command extends BaseCommand = BaseCommand> {
  id: string;
  startId: string;

  /** @deprecated in favor of versionID */
  skill_id: string;

  versionID: string;

  name?: string;
  lines: Record<string, Node>;
  commands: Command[];
  variables: Variable[];
}
