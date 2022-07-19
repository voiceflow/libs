import { unique } from '@common/utils/array';
import { TIMEZONES } from '@common/utils/timezones';
import { expect } from 'chai';

describe('Utils | timezones', () => {
  describe('TIMEZONES', () => {
    it('a list of all timezones', () => {
      expect(TIMEZONES.length).to.eq(490);
      expect(unique(TIMEZONES)).to.eql(TIMEZONES);
    });
  });
});
