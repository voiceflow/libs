import { BaseDiagramNode } from '../base';

export interface BlockTemplate {
  name: string;
  color: string;
  template: BaseDiagramNode[];
}
