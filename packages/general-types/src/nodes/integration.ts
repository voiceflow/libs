import { NodeData as APINodeData } from './api';
import { NodeData as GoogleSheetsNodeData } from './googleSheets';
import { DefaultNode, NodeType } from './types';
import { NodeData as ZapierNodeData } from './zapier';

export type Node = DefaultNode<NodeType.INTEGRATIONS, APINodeData | ZapierNodeData | GoogleSheetsNodeData>;
