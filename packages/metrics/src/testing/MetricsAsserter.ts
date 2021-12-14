/* eslint-disable max-classes-per-file */

import axios from 'axios';
import { expect } from 'chai';
import { setTimeout as sleep } from 'timers/promises';
import types from 'util/types';

import type { Config, Metrics } from '@/client';

import { createBaseConfig } from './createBaseConfig';

/**
 * An internal class used to expose the {@link AssertionHelper.assert}
 */
class AssertionHelper {
  constructor(
    private readonly options: Readonly<{
      metrics: Metrics;
      route: string;
      expressions: readonly RegExp[];
    }>
  ) {}

  async assert(): Promise<void> {
    await sleep(1);

    try {
      const { data } = await axios.get<string>(this.options.route);

      this.options.expressions.forEach((expression) => {
        expect(data).to.match(expression);
      });
    } finally {
      await this.options.metrics.stop();
    }
  }
}

type TestingConfig = Pick<Config, 'SERVICE_NAME'>;
/** Doing this once in module scope is fine since only 1 service will be running tests, there is no realistic risk of collision. */
const DEFAULT_SERVICE_NAME = `test-${Math.random().toString(36).slice(2)}`;

export class MetricsAsserter<M extends Metrics> {
  constructor(private readonly MetricsClient: (...args: any[]) => M) {}

  /**
   * Assert that a metrics endpoint matches a regular expression(s).
   */
  async assertMetric({
    /** The config to use in the metrics client. */
    config = {
      SERVICE_NAME: DEFAULT_SERVICE_NAME,
    },
    /** The regular expression(s) to match against the metrics output. */
    expected,
  }: {
    config?: TestingConfig;
    expected: RegExp | ReadonlyArray<RegExp>;
  }): Promise<{ metrics: M; assert: () => Promise<void> }> {
    const combinedConfig = { ...(await createBaseConfig()), ...config };

    const metrics = this.MetricsClient(combinedConfig);

    const expressions = types.isRegExp(expected) ? [expected] : expected;

    const metricsAssert = new AssertionHelper({
      metrics,
      expressions,
      route: `http://localhost:${combinedConfig.PORT_METRICS}/metrics`,
    });

    return {
      metrics,
      assert: metricsAssert.assert.bind(metricsAssert),
    };
  }
}
