import { Utils } from '@voiceflow/common';

import * as BaseModels from '@/models';
import * as Node from '@/node';

export const createNodeTypeguard = Utils.typeguard.createTypedTypeguardCreator<BaseModels.BaseNode>();

export const isV1 = (node: BaseModels.BaseNode): node is Node._v1.Node => Utils.object.hasProperty(node, '_v') && node._v === 1;
export const isIf = createNodeTypeguard<Node.If.Node>(Node.NodeType.IF);
export const isSet = createNodeTypeguard<Node.Set.Node>(Node.NodeType.SET);
export const isText = createNodeTypeguard<Node.Text.Node>(Node.NodeType.TEXT);
export const isCard = createNodeTypeguard<Node.Card.Node>(Node.NodeType.CARD);
export const isIfV2 = createNodeTypeguard<Node.IfV2.Node>(Node.NodeType.IF_V2);
export const isFlow = createNodeTypeguard<Node.Flow.Node>(Node.NodeType.FLOW);
export const isCode = createNodeTypeguard<Node.Code.Node>(Node.NodeType.CODE);
export const isExit = createNodeTypeguard<Node.Exit.Node>(Node.NodeType.EXIT);
export const isSpeak = createNodeTypeguard<Node.Speak.Node>(Node.NodeType.SPEAK);
export const isStart = createNodeTypeguard<Node.Start.Node>(Node.NodeType.START);
export const isSetV2 = createNodeTypeguard<Node.SetV2.Node>(Node.NodeType.SET_V2);
export const isVisual = createNodeTypeguard<Node.Visual.Node>(Node.NodeType.VISUAL);
export const isStream = createNodeTypeguard<Node.Stream.Node>(Node.NodeType.STREAM);
export const isRandom = createNodeTypeguard<Node.Random.Node>(Node.NodeType.RANDOM);
export const isCapture = createNodeTypeguard<Node.Capture.Node>(Node.NodeType.CAPTURE);
export const isGeneral = createNodeTypeguard<Node.General.Node>(Node.NodeType.GENERAL);
export const isDirective = createNodeTypeguard<Node.Directive.Node>(Node.NodeType.DIRECTIVE);
export const isCaptureV2 = createNodeTypeguard<Node.CaptureV2.Node>(Node.NodeType.CAPTURE_V2);
export const isInteraction = createNodeTypeguard<Node.Interaction.Node>(Node.NodeType.INTERACTION);
export const isIntegrations = createNodeTypeguard<Node.Integration.Node>(Node.NodeType.INTEGRATIONS);
