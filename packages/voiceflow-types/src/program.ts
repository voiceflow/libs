import type { BaseModels } from '@voiceflow/base-types';

import type { AnyCommand, AnyNode } from './node';

export interface Program extends BaseModels.Program.Model<AnyNode, AnyCommand> {}
