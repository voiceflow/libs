import { Diagram } from '@/diagram';
import { Project } from '@/project';
import { Version } from '@/version';

export interface VF {
  project: Project;
  version: Version;
  diagrams: Diagram[];
}
