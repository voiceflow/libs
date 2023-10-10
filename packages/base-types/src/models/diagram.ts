import { BaseDiagramNode, Variable } from './base';

export enum DiagramType {
  TOPIC = 'TOPIC',
  GROUP = 'GROUP',
  COMPONENT = 'COMPONENT',
  TEMPLATE = 'TEMPLATE',
}

export enum MenuItemType {
  NODE = 'NODE',
  DIAGRAM = 'DIAGRAM',
}

export interface MenuItem {
  type: MenuItemType;
  sourceID: string;
}

export interface Model<Node extends BaseDiagramNode = BaseDiagramNode> {
  _id: string;
  versionID: string;
  diagramID: string;
  creatorID: number;

  name: string;
  type?: DiagramType;
  zoom: number;
  nodes: Record<string, Node>;
  offsetX: number;
  offsetY: number;
  modified: number;
  variables: Variable[];
  menuItems?: MenuItem[];

  /**
   * @deprecated never used
   */
  children?: string[];

  /**
   * @deprecated use `menuItems` instead
   */
  menuNodeIDs?: string[];

  /**
   * @deprecated use `menuNodeIDs` instead
   */
  intentStepIDs?: string[];
}
