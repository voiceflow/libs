import { Diagram } from '@voiceflow-types/diagram';
import { Program } from '@voiceflow-types/program';
import { Project } from '@voiceflow-types/project';
import { Version } from '@voiceflow-types/version';

export interface VF {
  project: Project;
  version: Version;
  diagrams: Record<string, Diagram>;
}

export interface VFR {
  project: Project;
  version: Version;
  diagrams: Record<string, Diagram>;
  programs: Record<string, Program>;
}
