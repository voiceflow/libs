# metrics

TODO: fix badges
[![circle ci](https://circleci.com/gh/voiceflow/common/tree/master.svg?style=shield&circle-token=b8ef434646ff25f48bd1d7435feadd29a79f482b)](https://circleci.com/gh/voiceflow/common/tree/master)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=voiceflow_common&metric=coverage)](https://sonarcloud.io/dashboard?id=voiceflow_common)
[![sonar quality gate](https://sonarcloud.io/api/project_badges/measure?project=voiceflow_common&token=3042b477b83448e1ebcf24eabce017fa57e1fd54&metric=alert_status)](https://sonarcloud.io/dashboard?id=voiceflow_common&token=3042b477b83448e1ebcf24eabce017fa57e1fd54)

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
