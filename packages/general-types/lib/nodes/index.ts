import { Voice } from '@/types';

import * as Api from './api';
import * as Capture from './capture';
import * as Code from './code';
import * as Command from './command';
import * as Exit from './exit';
import * as Flow from './flow';
import * as General from './general';
import * as GoogleSheets from './googleSheets';
import * as If from './if';
import * as Integration from './integration';
import * as Intent from './intent';
import * as Interaction from './interaction';
import * as Prompt from './prompt';
import * as Random from './random';
import * as Set from './set';
import * as Speak from './speak';
import * as Start from './start';
import * as Stream from './stream';
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
  | Command.Step;

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
  | If.Node;

export type BaseCommands = Intent.Command | Command.Command;

export type GeneralSteps = BaseSteps<Voice>;
export type GeneralNodes = BaseNodes;
export type GeneralCommands = BaseCommands;
