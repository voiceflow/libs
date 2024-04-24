import type { StepLogKind } from '../logs/kinds';

export type Iso8601Timestamp = string;

/** A reference to a path on the canvas. */
export interface PathReference {
  componentName: StepLogKind;
  stepID: string;
}

/** A reference to a flow (frame) on the canvas. */
export interface FlowReference {
  name: string | null;
  diagramID: string;
}

/** A common interface for representing a before & after change of a value. */
export interface ValueChange<Before, After = Before> {
  before: Before;
  after: After;
}

/**
 * An abstract interface for something that includes changed variables.
 * This enforces a consistent naming scheme of the property.
 */
export interface ChangedVariables<V, K extends PropertyKey = string, V2 = V> {
  changedVariables: Record<K, ValueChange<V, V2>>;
}

export type VariableValue = string | number;
