import { describe, expect, it } from 'vitest';
import { isBaseEvent } from './event';

describe('event.ts', () => {
  describe('isBaseEvent', () => {
    it('rejects values that are not BaseEvent', () => {
      expect(isBaseEvent(1)).to.eq(false);
      expect(isBaseEvent(true)).to.eq(false);
      expect(isBaseEvent('hello')).to.eq(false);
      expect(isBaseEvent(undefined)).to.eq(false);

      expect(isBaseEvent(null)).to.eq(false);

      expect(isBaseEvent({})).to.eq(false);
      expect(isBaseEvent({ propA: 'valA' })).to.eq(false);
    });

    it('accepts values that are BaseEvent', () => {
      expect(isBaseEvent({ type: 'event-type' })).to.eq(true);
      expect(isBaseEvent({ 
        type: 'event-type', 
        propA: 1,
        propB: 'hello',
        propC: true,
        propD: {
          propE: [1,2,3,4,5],
        }
      })).to.eq(true);
    });
  });
});