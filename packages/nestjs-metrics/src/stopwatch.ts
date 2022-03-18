import { Attributes, Histogram } from '@opentelemetry/api-metrics';
import { performance } from 'perf_hooks';

/**
 * A class to help record a duration (in milliseconds) in a histogram.
 * Generally used for measuring performance.
 */
export class HistogramStopwatch {
  /** Get a monotonic timestamp in milliseconds. */
  private static getMonotonicTime(): number {
    return performance.now();
  }

  private readonly startTime = HistogramStopwatch.getMonotonicTime();

  private constructor(private readonly histogram: Histogram) {}

  /** Create a new stopwatch and start recording time. */
  static start(histogram: Histogram): HistogramStopwatch {
    return new HistogramStopwatch(histogram);
  }

  /**
   * Records a duration in milliseconds to this {@link HistogramStopwatch.histogram stopwatch's histogram}.
   * If attributes were passed they will also be recorded.
   */
  finish(attributes?: Attributes | undefined): void {
    const endTime = HistogramStopwatch.getMonotonicTime();
    const durationMilliseconds = endTime - this.startTime;

    this.histogram.record(durationMilliseconds, attributes);
  }
}
