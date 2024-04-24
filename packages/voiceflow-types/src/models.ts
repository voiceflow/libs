import type { Diagram } from '@voiceflow-types/diagram';
import type { Program } from '@voiceflow-types/program';
import type { Project } from '@voiceflow-types/project';
import type { Version } from '@voiceflow-types/version';

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
