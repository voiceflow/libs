import { TimeoutModule } from '@nestjs-timeout/timeout.module';
import { expect } from 'chai';

describe('TimeoutModule', () => {
  it('should be defined', () => {
    expect(() => new TimeoutModule()).not.to.throw();
  });
});
