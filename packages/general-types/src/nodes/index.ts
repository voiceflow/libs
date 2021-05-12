import { Voice } from '@/types';

import * as _v1 from './_v1';
import * as Api from './api';
import * as Capture from './capture';
import * as Card from './card';
import * as Code from './code';
import * as Directive from './directive';
import * as Exit from './exit';
import * as Flow from './flow';
import * as General from './general';
import * as GoogleSheets from './googleSheets';
import * as If from './if';
import * as IfV2 from './ifV2';
import * as Integration from './integration';
import * as Interaction from './interaction';
import * as Intent from './jump';
import * as Prompt from './prompt';
import * as Command from './push';
import * as Random from './random';
import * as Set from './set';
import * as SetV2 from './setV2';
import * as Speak from './speak';
import * as Start from './start';
import * as Stream from './stream';
import * as Visual from './visual';
import * as Zapier from './zapier';

export * from './types';

export type BaseSteps<V> =
  | Set.Step
  | SetV2.Step
  | Capture.Step<V>
  | Flow.Step
  | Start.Step
  | Speak.Step<V>
  | Interaction.Step<V>
  | Code.Step
  | Intent.Step
  | Prompt.Step<V>
  | Api.Step
  | Exit.Step
  | Random.Step
  | Zapier.Step
  | GoogleSheets.Step
  | If.Step
  | IfV2.Step
  | Stream.Step
  | General.Step
  | Visual.Step
  | Command.Step
  | Directive.Step
  | Card.Step
  | _v1.Step;

export type BaseNodes =
  | Set.Node
  | SetV2.Node
  | Capture.Node
  | Flow.Node
  | Start.Node
  | Speak.Node
  | Interaction.Node
  | Code.Node
  | Integration.Node
  | Exit.Node
  | Random.Node
  | Stream.Node
  | General.Node
  | Visual.Node
  | If.Node
  | IfV2.Node
  | Directive.Node
  | Card.Node
  | _v1.Node;

export type GeneralSteps = BaseSteps<Voice>;
export type GeneralNodes = BaseNodes;
