import * as _v1 from './_v1';
import * as Api from './api';
import * as ChannelAction from './channelAction';
import * as Code from './code';
import * as Component from './component';
import * as Exit from './exit';
import * as Flow from './flow';
import * as General from './general';
import * as GoogleSheets from './googleSheets';
import * as GoTo from './goTo';
import * as GoToNode from './goToNode';
import * as If from './if';
import * as IfV2 from './ifV2';
import * as Integration from './integration';
import * as Intent from './jump';
import * as Command from './push';
import * as Random from './random';
import * as RandomV2 from './randomV2';
import * as Set from './set';
import * as SetV2 from './setV2';
import * as Start from './start';
import * as Url from './url';
import { BaseNode, NodeNextID } from './utils';
import * as Zapier from './zapier';

export * as _v1 from './_v1';
export * as Api from './api';
export * as Buttons from './buttons';
export * as Capture from './capture';
export * as CaptureV2 from './captureV2';
export * as Card from './card';
export * as CardV2 from './cardV2';
export * as Carousel from './carousel';
export * as ChannelAction from './channelAction';
export * as Code from './code';
export * as Component from './component';
export * from './constants';
export * as Directive from './directive';
export * as Exit from './exit';
export * as Flow from './flow';
export * as General from './general';
export * as GoogleSheets from './googleSheets';
export * as GoTo from './goTo';
export * as GoToNode from './goToNode';
export * as If from './if';
export * as IfV2 from './ifV2';
export * as Integration from './integration';
export * as Interaction from './interaction';
export * as Intent from './jump';
export * as Prompt from './prompt';
export * as Command from './push';
export * as Random from './random';
export * as RandomV2 from './randomV2';
export * as Set from './set';
export * as SetV2 from './setV2';
export * as Speak from './speak';
export * as Start from './start';
export * as Stream from './stream';
export * as Text from './text';
export * as Url from './url';
export * as Utils from './utils';
export * as Visual from './visual';
export * as Zapier from './zapier';

export interface NextOnlyNode extends BaseNode, NodeNextID {
  type: '_next';
}

export type AnyCommonStep =
  | Set.Step
  | SetV2.Step
  | Flow.Step
  | Component.Step
  | Start.Step
  | Code.Step
  | Intent.Step
  | Command.Step
  | Api.Step
  | Exit.Step
  | Random.Step
  | RandomV2.Step
  | Zapier.Step
  | GoogleSheets.Step
  | If.Step
  | IfV2.Step
  | General.Step
  | GoTo.Step
  | GoToNode.Step
  | Url.Step
  | ChannelAction.Step
  | _v1.Step;

export type AnyCommonNode =
  | Set.Node
  | SetV2.Node
  | Flow.Node
  | Start.Node
  | Code.Node
  | Integration.Node
  | Exit.Node
  | Random.Node
  | RandomV2.Node
  | General.Node
  | If.Node
  | IfV2.Node
  | GoTo.Node
  | Url.Node
  | GoToNode.Node
  | NextOnlyNode
  | ChannelAction.Node
  | _v1.Node;

export type AnyCommonCommand = Intent.Command | Command.Command;
