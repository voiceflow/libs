import * as s from 'superstruct';

import { SDiagramID, SIntent, SNode, SNodeID, SSkillID, SSlot, SVariable } from './shared';

export const SProgramID = s.string();
export type ProgramID = s.StructType<typeof SProgramID>;

export const SProgramCommandMapping = s.object({
  slot: SSlot,
  variable: SVariable,
});
export type ProgramCommandMapping = s.StructType<typeof SProgramCommandMapping>;

export const SProgramCommand = s.object({
  intent: SIntent,
  mappings: s.array(SProgramCommandMapping),
  diagram_id: SDiagramID,
});
export type ProgramCommand = s.StructType<typeof SProgramCommand>;

export const SProgram = s.object({
  id: SProgramID,
  startId: SNodeID,
  skill_id: SSkillID,

  lines: s.record(SNodeID, SNode),
  commands: s.array(SProgramCommand),
  variables: s.array(SVariable),
});

export type Program = s.StructType<typeof SProgram>;
