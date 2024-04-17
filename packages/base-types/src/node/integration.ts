import type { NodeData as APINodeData } from './api';
import type { NodeType } from './constants';
import type { NodeData as GoogleSheetsNodeData } from './googleSheets';
import type { BaseNode } from './utils';
import type { NodeData as ZapierNodeData } from './zapier';

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
