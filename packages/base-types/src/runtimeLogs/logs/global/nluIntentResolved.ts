import type { BaseGlobalLog } from '../base';
import type { GlobalLogKind } from '../kinds';

interface Entity {
  value: string;
}

export type NluIntentResolvedLog = BaseGlobalLog<
  GlobalLogKind.NLU_INTENT_RESOLVED,
  {
    resolvedIntent: string;
    confidence: number;
    utterance: string;
    entities: Record<string, Entity>;
  }
>;
