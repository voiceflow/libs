import { BaseModels } from '@voiceflow/base-types';

import { AnyStep } from './node';

export interface Diagram extends BaseModels.Diagram.Model<BaseModels.BaseBlock | BaseModels.BaseActions | AnyStep> {}
