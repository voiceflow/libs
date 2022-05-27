import * as Node from '@base-types/node';
import { Utils } from '@voiceflow/common';

export const createNodeTypeTypeguard = Utils.typeguard.createTypeguardCreator<Node.NodeType>();

export const isIf = createNodeTypeTypeguard(Node.NodeType.IF);
export const isSet = createNodeTypeTypeguard(Node.NodeType.SET);
export const isApi = createNodeTypeTypeguard(Node.NodeType.API);
export const isGoTo = createNodeTypeTypeguard(Node.NodeType.GOTO);
export const isText = createNodeTypeTypeguard(Node.NodeType.TEXT);
export const isCard = createNodeTypeTypeguard(Node.NodeType.CARD);
export const isIfV2 = createNodeTypeTypeguard(Node.NodeType.IF_V2);
export const isFlow = createNodeTypeTypeguard(Node.NodeType.FLOW);
export const isCode = createNodeTypeTypeguard(Node.NodeType.CODE);
export const isExit = createNodeTypeTypeguard(Node.NodeType.EXIT);
export const isSpeak = createNodeTypeTypeguard(Node.NodeType.SPEAK);
export const isStart = createNodeTypeTypeguard(Node.NodeType.START);
export const isSetV2 = createNodeTypeTypeguard(Node.NodeType.SET_V2);
export const isCardV2 = createNodeTypeTypeguard(Node.NodeType.CARDV2);
export const isPrompt = createNodeTypeTypeguard(Node.NodeType.PROMPT);
export const isVisual = createNodeTypeTypeguard(Node.NodeType.VISUAL);
export const isIntent = createNodeTypeTypeguard(Node.NodeType.INTENT);
export const isStream = createNodeTypeTypeguard(Node.NodeType.STREAM);
export const isZapier = createNodeTypeTypeguard(Node.NodeType.ZAPIER);
export const isRandom = createNodeTypeTypeguard(Node.NodeType.RANDOM);
export const isCommand = createNodeTypeTypeguard(Node.NodeType.COMMAND);
export const isButtons = createNodeTypeTypeguard(Node.NodeType.BUTTONS);
export const isCapture = createNodeTypeTypeguard(Node.NodeType.CAPTURE);
export const isGeneral = createNodeTypeTypeguard(Node.NodeType.GENERAL);
export const isGoToNode = createNodeTypeTypeguard(Node.NodeType.GOTO_NODE);
export const isDirective = createNodeTypeTypeguard(Node.NodeType.DIRECTIVE);
export const isComponent = createNodeTypeTypeguard(Node.NodeType.COMPONENT);
export const isCaptureV2 = createNodeTypeTypeguard(Node.NodeType.CAPTURE_V2);
export const isDeprecated = createNodeTypeTypeguard(Node.NodeType.DEPRECATED);
export const isInteraction = createNodeTypeTypeguard(Node.NodeType.INTERACTION);
export const isIntegrations = createNodeTypeTypeguard(Node.NodeType.INTEGRATIONS);
export const isGoogleSheets = createNodeTypeTypeguard(Node.NodeType.GOOGLE_SHEETS);

export const isRuntimeOnly = createNodeTypeTypeguard(Node.RUNTIME_ONLY_NODES);
