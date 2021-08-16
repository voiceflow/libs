import { GeneralDiagram } from '@/diagram';
import { GeneralProject } from '@/project';
import { GeneralVersion } from '@/version';

export interface VF {
  project: GeneralProject;
  version: GeneralVersion;
  diagrams: GeneralDiagram[];
}
