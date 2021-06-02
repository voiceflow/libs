import { NodeData as APINodeData } from './api';
import { NodeData as GoogleSheetsNodeData } from './googleSheets';
import { BaseNode, NodeType } from './types';
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

export type Node = ApiNode | ZapierNode | GoogleSheetsNode;
