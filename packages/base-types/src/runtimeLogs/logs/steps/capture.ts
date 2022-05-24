import { BaseStepLog } from '../base';
import { StepLogKind } from '../kinds';

// TODO: Make sure there isn't other information that should be included here
export type CaptureStepLog = BaseStepLog<
  StepLogKind.CAPTURE,
  {
    slots: Array<{
      utteredValue: string;
      canonicalValue: string;
    }>;
  }
>;
