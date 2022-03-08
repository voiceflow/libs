import { HealthCheckErrorDto } from '@nestjs-common/health/health-check-error.dto';
import { expect } from 'chai';

describe('HealthCheckErrorDto', () => {
  it('works with Error instances', () => {
    const error = new Error('test');
    const healthCheckError = new HealthCheckErrorDto(error);

    expect(healthCheckError.error).to.deep.equal({
      name: 'Error',
      message: 'test',
      stack: error.stack,
    });
    expect(healthCheckError.rawError).to.eq(error);
  });

  it('works with other objects', () => {
    const error = {
      key: 'value',
    };
    const healthCheckError = new HealthCheckErrorDto(error);

    expect(healthCheckError.error).to.eq(null);
    expect(healthCheckError.rawError).to.eq(error);
    // This tests typesafety of the generic
    expect(healthCheckError.rawError.key).to.eq(error.key);
  });
});
