import { Block, Diagram } from '@voiceflow/api-sdk';

import { GeneralSteps } from '@/nodes';
import { GeneralProject } from '@/project';
import { GeneralVersion } from '@/version';

export interface VF {
  project: GeneralProject;
  version: GeneralVersion;
  diagrams: (Omit<Diagram, 'nodes'> & { nodes: Record<string, Block | GeneralSteps> })[];
}
