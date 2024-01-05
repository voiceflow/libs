import { unique } from './array';
import { TIMEZONES } from './timezones';

describe('Utils | timezones', () => {
  describe('TIMEZONES', () => {
    it('a list of all timezones', () => {
      expect(TIMEZONES.length).toBe(490);
      expect(unique(TIMEZONES)).toEqual(TIMEZONES);
    });
  });
});
