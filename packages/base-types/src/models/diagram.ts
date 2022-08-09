import { BaseDiagramNode, Variable } from './base';

export enum DiagramType {
  TOPIC = 'TOPIC',
  GROUP = 'GROUP',
  COMPONENT = 'COMPONENT',
  TEMPLATE = 'TEMPLATE',
}

export interface Model<Node extends BaseDiagramNode = BaseDiagramNode> {
  _id: string;
  versionID: string;
  creatorID: number;

  name: string;
  type?: DiagramType;
  zoom: number;
  nodes: Record<string, Node>;
  offsetX: number;
  offsetY: number;
  modified: number;
  children: string[];
  variables: Variable[];
  intentStepIDs?: string[];
}
