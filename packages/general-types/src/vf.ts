import { BaseBlock, Diagram } from '@voiceflow/api-sdk';

import { GeneralSteps } from '@/node';
import { GeneralProject } from '@/project';
import { GeneralVersion } from '@/version';

export interface VF {
  project: GeneralProject;
  version: GeneralVersion;
  diagrams: (Omit<Diagram, 'nodes'> & { nodes: Record<string, BaseBlock | GeneralSteps> })[];
}
