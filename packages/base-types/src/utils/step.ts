import { Utils } from '@voiceflow/common';

import * as BaseModels from '@/models';
import * as Node from '@/node';

export const createStepTypeguard = Utils.typeguard.createTypedTypeguardCreator<BaseModels.BaseDiagramNode>();

export const isIf = createStepTypeguard<Node.If.Step>(Node.NodeType.IF);
export const isSet = createStepTypeguard<Node.Set.Step>(Node.NodeType.SET);
export const isApi = createStepTypeguard<Node.Api.Step>(Node.NodeType.API);
export const isText = createStepTypeguard<Node.Text.Step>(Node.NodeType.TEXT);
export const isCard = createStepTypeguard<Node.Card.Step>(Node.NodeType.CARD);
export const isIfV2 = createStepTypeguard<Node.IfV2.Step>(Node.NodeType.IF_V2);
export const isFlow = createStepTypeguard<Node.Flow.Step>(Node.NodeType.FLOW);
export const isCode = createStepTypeguard<Node.Code.Step>(Node.NodeType.CODE);
export const isExit = createStepTypeguard<Node.Exit.Step>(Node.NodeType.EXIT);
export const isSpeak = createStepTypeguard<Node.Speak.Step>(Node.NodeType.SPEAK);
export const isStart = createStepTypeguard<Node.Start.Step>(Node.NodeType.START);
export const isSetV2 = createStepTypeguard<Node.SetV2.Step>(Node.NodeType.SET_V2);
export const isPrompt = createStepTypeguard<Node.Prompt.Step>(Node.NodeType.PROMPT);
export const isVisual = createStepTypeguard<Node.Visual.Step>(Node.NodeType.VISUAL);
export const isIntent = createStepTypeguard<Node.Intent.Step>(Node.NodeType.INTENT);
export const isStream = createStepTypeguard<Node.Stream.Step>(Node.NodeType.STREAM);
export const isZapier = createStepTypeguard<Node.Zapier.Step>(Node.NodeType.ZAPIER);
export const isRandom = createStepTypeguard<Node.Random.Step>(Node.NodeType.RANDOM);
export const isCommand = createStepTypeguard<Node.Command.Step>(Node.NodeType.COMMAND);
export const isButtons = createStepTypeguard<Node.Buttons.Step>(Node.NodeType.BUTTONS);
export const isCapture = createStepTypeguard<Node.Capture.Step>(Node.NodeType.CAPTURE);
export const isGeneral = createStepTypeguard<Node.General.Step>(Node.NodeType.GENERAL);
export const isDirective = createStepTypeguard<Node.Directive.Step>(Node.NodeType.DIRECTIVE);
export const isComponent = createStepTypeguard<Node.Component.Step>(Node.NodeType.COMPONENT);
export const isCaptureV2 = createStepTypeguard<Node.CaptureV2.Step>(Node.NodeType.CAPTURE_V2);
export const isDeprecated = createStepTypeguard<BaseModels.BaseDiagramNode & { type: Node.NodeType.DEPRECATED }>(Node.NodeType.DEPRECATED);
export const isInteraction = createStepTypeguard<Node.Interaction.Step>(Node.NodeType.INTERACTION);
export const isGoogleSheets = createStepTypeguard<Node.GoogleSheets.Step>(Node.NodeType.GOOGLE_SHEETS);
