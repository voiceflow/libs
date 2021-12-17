import { NodeData as APINodeData } from './api';
import { NodeType } from './constants';
import { NodeData as GoogleSheetsNodeData } from './googleSheets';
import { NodeData as TwilioNodeData } from './twilio';
import { BaseNode } from './utils';
import { NodeData as ZapierNodeData } from './zapier';

export interface ApiNode extends BaseNode, APINodeData {
  type: NodeType.INTEGRATIONS;
}

export interface ZapierNode extends BaseNode, ZapierNodeData {
  type: NodeType.INTEGRATIONS;
}

export interface GoogleSheetsNode extends BaseNode, GoogleSheetsNodeData {
  type: NodeType.INTEGRATIONS;
}

export interface TwilioNode extends BaseNode, TwilioNodeData {
  type: NodeType.INTEGRATIONS;
}

export type Node = ApiNode | ZapierNode | GoogleSheetsNode | TwilioNode;
