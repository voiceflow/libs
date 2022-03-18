import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Counter, Histogram, MetricOptions, metrics, UpDownCounter } from '@opentelemetry/api-metrics';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { Meter, MeterProvider, MetricExporter } from '@opentelemetry/sdk-metrics-base';

import { Providers } from './constants';
import { MetricsOptions } from './interfaces/metrics-options.interface';

@Injectable()
export class MetricsService implements OnApplicationShutdown {
  private readonly exporter: MetricExporter;

  private readonly meter: Meter;

  private readonly counters: Map<string, Counter> = new Map();

  private readonly histograms: Map<string, Histogram> = new Map();

  private readonly upDownCounters: Map<string, UpDownCounter> = new Map();

  constructor(@Inject(Providers.METRICS_OPTIONS) config: MetricsOptions) {
    this.exporter = new PrometheusExporter({ port: config.port });

    const meterProvider = new MeterProvider({
      exporter: this.exporter,
      interval: config.interval,
    });

    this.meter = meterProvider.getMeter(config.serviceName);
    metrics.setGlobalMeterProvider(meterProvider);
  }

  async onApplicationShutdown(): Promise<void> {
    await this.exporter.shutdown();
    await this.meter.shutdown();
  }

  getOrCreateCounter(name: string, options?: MetricOptions): Counter {
    let counter = this.counters.get(name);

    if (!counter) {
      counter = this.meter.createCounter(name, options);
      this.counters.set(name, counter);
    }

    return counter;
  }

  getOrCreateHistogram(name: string, options?: MetricOptions): Histogram {
    let histogram = this.histograms.get(name);

    if (!histogram) {
      histogram = this.meter.createHistogram(name, options);
      this.histograms.set(name, histogram);
    }

    return histogram;
  }

  getOrCreateUpDownCounter(name: string, options?: MetricOptions): UpDownCounter {
    let upDownCounter = this.upDownCounters.get(name);

    if (!upDownCounter) {
      upDownCounter = this.meter.createUpDownCounter(name, options);
      this.upDownCounters.set(name, upDownCounter);
    }

    return upDownCounter;
  }
}
