/* eslint-disable max-classes-per-file */

import type { Metrics as BaseMetrics } from '@metrics/client';
import axios from 'axios';
import { expect } from 'chai';
import { setTimeout as sleep } from 'timers/promises';
import types from 'util/types';

import type { BaseConfig } from './createBaseConfig';
import { createBaseConfig } from './createBaseConfig';

/**
 * An internal class used to expose the {@link AssertionHelper.assert}
 */
class AssertionHelper {
  constructor(
    private readonly options: Readonly<{
      metrics: BaseMetrics;
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

export class MetricsAsserter<Metrics extends BaseMetrics, Config extends Record<never, never>> {
  constructor(private readonly MetricsClient: (config: Config & BaseConfig) => Metrics) {}

  /**
   * Assert that a metrics endpoint matches a regular expression(s).
   */
  async assertMetric({
    /** The config to use in the metrics client. */
    config = {},
    /** The regular expression(s) to match against the metrics output. */
    expected,
  }: {
    config?: Partial<Config>;
    expected: RegExp | ReadonlyArray<RegExp>;
  }): Promise<{ metrics: Metrics; assert: () => Promise<void> }> {
    const combinedConfig = { ...(await createBaseConfig()), ...config };

    const metrics = this.MetricsClient(combinedConfig as unknown as Config & BaseConfig);

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
