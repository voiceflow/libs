import * as Api from './api';
import * as Capture from './capture';
import * as Card from './card';
import * as Code from './code';
import * as Exit from './exit';
import * as Flow from './flow';
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

export type GoogleSteps =
  | Set.Step
  | Capture.Step
  | Flow.Step
  | Start.Step
  | Speak.Step
  | Interaction.Step
  | Code.Step
  | Intent.Step
  | Card.Step
  | Prompt.Step
  | Api.Step
  | Exit.Step
  | Random.Step
  | Zapier.Step
  | GoogleSheets.Step
  | If.Step
  | Stream.Step;

export type GoogleNodes =
  | Set.Node
  | Capture.Node
  | Flow.Node
  | Start.Node
  | Speak.Node
  | Interaction.Node
  | Code.Node
  | Card.Node
  | Integration.Node
  | Exit.Node
  | Random.Node
  | If.Node
  | Stream.Node;

export type GoogleCommands = Intent.Command;
