import { BaseModels } from '@voiceflow/base-types';

import { AnyCommand, AnyNode } from './node';

export interface Program extends BaseModels.Program.Model<AnyNode, AnyCommand> {}
