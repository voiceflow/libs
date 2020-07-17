import * as s from 'superstruct';

import { SDiagramID, SIntent, SNode, SNodeID, SSkillID, SSlot, SVariable } from './shared';

export const SProgramID = s.number();
export type ProgramID = s.StructType<typeof SProgramID>;

export const SProgramCommandMapping = s.object({
  slot: SSlot,
  variable: SVariable,
});
export type ProgramCommandMapping = s.StructType<typeof SProgramCommandMapping>;

export const SProgramCommand = s.object({
  diagram_id: SDiagramID,
  intent: SIntent,
  mappings: s.array(SProgramCommandMapping),
});
export type SProgramCommand = s.StructType<typeof SProgramCommand>;

export const SProgram = s.object({
  id: SProgramID,
  startId: SNodeID,
  skill_id: SSkillID,

  lines: s.record(s.string(), SNode),
  commands: s.array(SProgramCommand),
  variables: s.array(SVariable),
});

export type Program = s.StructType<typeof SProgram>;
