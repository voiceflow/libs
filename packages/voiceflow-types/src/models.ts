import { Diagram } from '@voiceflow-types/diagram';
import { Project } from '@voiceflow-types/project';
import { Version } from '@voiceflow-types/version';

export interface VF {
  project: Project;
  version: Version;
  diagrams: Diagram[];
}
