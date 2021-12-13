import MetricsClient from '@/client';
import * as VFMetrics from '@/index';

const metricsAsserter = new VFMetrics.Testing.MetricsAsserter(MetricsClient);

describe('metrics client unit tests', () => {
  it('new', async () => {
    const config = await VFMetrics.Testing.createBaseConfig();

    const metrics = MetricsClient(config as any);

    await metrics.stop();
  });

  it('httpRequestDuration', async () => {
    const helper = await metricsAsserter.assertMetric({
      expected: [
        /^http_request_duration_count{operation="operation",status_code="123"} 2 \d+$/m,
        /^http_request_duration_sum{operation="operation",status_code="123"} 300 \d+$/m,
        /^http_request_duration_bucket{operation="operation",status_code="123",le="\+Inf"} 2 \d+$/m,
      ],
    });

    helper.metrics.httpRequestDuration('operation', 123, { duration: 200 });
    helper.metrics.httpRequestDuration('operation', 123, { duration: 100 });

    await helper.assert();
  });
});
