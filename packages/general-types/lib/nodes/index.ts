import { Voice } from '@/types';

import * as Api from './api';
import * as Capture from './capture';
import * as Code from './code';
import * as Directive from './directive';
import * as Exit from './exit';
import * as Flow from './flow';
import * as General from './general';
import * as GoogleSheets from './googleSheets';
import * as If from './if';
import * as Integration from './integration';
import * as Interaction from './interaction';
import * as Intent from './jump';
import * as Prompt from './prompt';
import * as Command from './push';
import * as Random from './random';
import * as Set from './set';
import * as Speak from './speak';
import * as Start from './start';
import * as Stream from './stream';
import * as Trace from './trace';
import * as Visual from './visual';
import * as Zapier from './zapier';

export * from './types';

export type BaseSteps<V> =
  | Set.Step
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
  | Stream.Step
  | General.Step
  | Visual.Step
  | Command.Step
  | Directive.Step
  | Trace.Step;

export type BaseNodes =
  | Set.Node
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
  | Directive.Node
  | Trace.Node;

export type GeneralSteps = BaseSteps<Voice>;
export type GeneralNodes = BaseNodes;
