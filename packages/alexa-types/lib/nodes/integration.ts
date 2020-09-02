import { NodeData as APINodeData } from './api';
import { DefaultNode, NodeType } from './types';

export type Node = DefaultNode<NodeType.INTEGRATION, APINodeData>;
