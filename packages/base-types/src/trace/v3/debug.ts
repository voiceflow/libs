import { BaseTraceFrame, TraceType } from '../../node/utils';

/**
 * The logging level of the debug trace. This property can be used to
 * filter for particular debug messages
 *
 * Definition of error levels is based on this article: https://sematext.com/blog/logging-levels/
 */
export enum DebugInfoLevel {
  /**
   * Used for finely detailed information to gain full visibility into the
   * `general-runtime` and debug a Voiceflow porgram.
   *
   * Messages of this nature can be extremely verbose, e.g, may annotate each
   * step of an algorithm.
   */
  Trace = 'trace',

  /**
   * Less granular, but still detailed information compared to `Trace`.
   * Used for troubleshooting and diagnosing issues or running an application
   * in a dev environment.
   */
  Debug = 'debug',

  /**
   * Standard log level indicating an event occurred in the `general-runtime`.
   *
   * Should not contain important debugging information, as this setting should not
   * be enabled on a regular basis.
   */
  Info = 'info',

  /**
   * Indicates an unexpected event that does NOT impede code execution. This
   * may not necessarily be an error.
   */
  Warn = 'warn',

  /**
   * Indicates an error that impedes code execution and causes non-business-logic
   * to break, e.g, payment API call did not go through.
   */
  Error = 'error',

  /**
   * Indicates a critical error that impedes critical business functionality, e.g,
   * could not start the Voiceflow program because it was not compiled.
   */
  Fatal = 'fatal',
}

/**
 * Indicates the concern or component that spawned this particular debug message.
 */
export enum DebugCode {
  /**
   * Debug information that is not pinned down to any particular component.
   */
  General = 'general',

  /**
   * Debug information arises from the knowledge base.
   */
  KnowledgeBase = 'knowledge_base',
}

interface StepData {
  code: DebugCode;
  level: DebugInfoLevel;
  details: Record<string, any>;
}

export interface TraceFrame extends BaseTraceFrame<StepData> {
  type: TraceType.V3_DEBUG;
}
