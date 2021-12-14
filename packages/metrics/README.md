# metrics

Helpers for exposing server-side metrics

## Usage

### `Client`

#### `Client.Metrics`

```ts
import { Counter } from '@opentelemetry/api-metrics';
import * as VFMetrics from '@voiceflow/metrics';

import log from '@/logger';
import { Config } from '@/types';

export class Metrics extends VFMetrics.Client.Metrics {
  protected counters: {
    foo: {
      bar: Counter;
    };
  };

  constructor(config: Config) {
    super({ ...config, SERVICE_NAME: 'example-service' });

    super.once('ready', ({ port, path }: VFMetrics.Client.Events['ready']) => {
      log.info(`[metrics] exporter ready ${log.vars({ port, path })}`);
    });

    this.counters = {
      foo: {
        bar: this.meter.createCounter('foo_bar', { description: 'Example description' }),
      },
    };
  }

  fooBar(): void {
    this.counters.foo.bar.add(1);
  }
}

const MetricsClient = (config: Config) => new Metrics(config);

export type MetricsType = Metrics;

export default MetricsClient;
```

### `Testing`

#### `Testing.createBaseConfig`

```ts
import * as VFMetrics from '@voiceflow/metrics';

const baseConfig = await VFMetrics.Testing.createBaseConfig();
```

#### `Testing.MetricsAsserter`

```ts
import * as VFMetrics from '@voiceflow/metrics';

import MetricsClient from '@/lib/clients/metrics';

const metricsAsserter = new VFMetrics.Testing.MetricsAsserter(MetricsClient);

describe('metrics client unit tests', () => {
  it('fooBar', async () => {
    const fixture = await metricsAsserter.assertMetric({ expected: /^foo_bar_total 1 \d+$/m });

    fixture.metrics.fooBar();

    await fixture.assert();
  });
});
```
