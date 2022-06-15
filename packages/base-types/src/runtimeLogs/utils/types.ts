import { StepLogKind } from '../logs/kinds';

export type Iso8601Timestamp = string;

/** A reference to a path on the canvas. */
export interface PathReference {
  componentName: StepLogKind;
  stepID: string;
}

/** A common interface for representing a before & after change of a value. */
export interface ValueChange<T> {
  before: T;
  after: T;
}

/**
 * An abstract interface for something that includes changed variables.
 * This enforces a consistent naming scheme of the property.
 */
export interface ChangedVariables<V, K extends PropertyKey = string> {
  changedVariables: Record<K, ValueChange<V>>;
}
