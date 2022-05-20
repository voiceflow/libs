import { StepLogKind } from '../logs/kinds';

export type Iso8601Timestamp = string;

/** A reference to a path on the canvas. */
export interface PathReference {
  componentName: StepLogKind;
  stepID: string;
}
