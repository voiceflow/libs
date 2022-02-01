import { BaseDiagramNode, CreatorID, DiagramID, Name, NodeID, Timestamp, Variable, VersionID } from './shared';

export enum DiagramType {
  TOPIC = 'TOPIC',
  GROUP = 'GROUP',
  COMPONENT = 'COMPONENT',
}

export interface Diagram<N extends BaseDiagramNode = BaseDiagramNode> {
  _id: DiagramID;

  name: Name;
  type?: DiagramType;
  versionID: VersionID;
  creatorID: CreatorID;
  variables: Variable[];

  offsetX: number;
  offsetY: number;
  zoom: number;

  children: DiagramID[];

  modified: Timestamp;

  nodes: Record<NodeID, N>;
}
