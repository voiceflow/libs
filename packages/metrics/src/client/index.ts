import type { ValueRecorder } from '@opentelemetry/api-metrics';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import type { Meter, MetricExporter } from '@opentelemetry/sdk-metrics-base';
import { MeterProvider } from '@opentelemetry/sdk-metrics-base';
import EventEmitter from 'events';

export interface Config {
  PORT_METRICS?: string | number | null | undefined;
  NODE_ENV: string;
  SERVICE_NAME: string;
}

/**
 * Events that can be emitted by an instance of {@link Metrics}.
 * Keys are the event name and values are the event data.
 */
export interface Events {
  /**
   * @example
   * ```ts
   * import * as VFMetrics from '@voiceflow/metrics';
   *
   * super.once('ready', ({ port, path }: VFMetrics.Client.Events['ready']) => {
   *   log.info(`[metrics] exporter ready ${log.vars({ port, path })}`);
   * });
   * ```
   */
  ready: {
    port: number;
    path: string;
  };
}

export class Metrics extends EventEmitter {
  protected meter: Meter;

  private exporter: MetricExporter;

  protected counters: Record<never, never>;

  protected recorders: {
    httpRequestDuration: ValueRecorder;
  };

  constructor(config: Readonly<Config>) {
    super();

    const port = config.PORT_METRICS ? Number(config.PORT_METRICS) : PrometheusExporter.DEFAULT_OPTIONS.port;
    const { endpoint } = PrometheusExporter.DEFAULT_OPTIONS;

    this.exporter = new PrometheusExporter({ port, endpoint }, () => {
      const data: Events['ready'] = { port, path: endpoint };
      this.emit('ready', data);
    });

    this.meter = new MeterProvider({
      exporter: this.exporter,
      interval: config.NODE_ENV === 'test' ? 0 : 1000,
    }).getMeter(config.SERVICE_NAME);

    this.counters = {};

    this.recorders = {
      httpRequestDuration: this.meter.createValueRecorder('http_request_duration', {
        description: 'Http requests duration',
      }),
    };
  }

  httpRequestDuration(operation: string, statusCode: number, opts: { duration: number }): void {
    this.recorders.httpRequestDuration
      .bind({
        operation,
        status_code: statusCode.toString(),
      })
      .record(opts.duration);
  }

  async stop(): Promise<void> {
    await this.meter.shutdown();
    await this.exporter.shutdown();
  }
}

const MetricsClient = (config: Config) => new Metrics(config);

export default MetricsClient;
