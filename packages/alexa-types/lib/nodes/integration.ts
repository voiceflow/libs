import { NodeData as APINodeData } from './api';
import { DefaultNode, NodeType } from './types';
import { NodeData as ZapierNodeData } from './zapier';

export type Node = DefaultNode<NodeType.INTEGRATIONS, APINodeData | ZapierNodeData>;
