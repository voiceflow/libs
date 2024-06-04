import { describe, expect, it } from 'vitest';
import { BaseRequest, isRequestWithActionPayload, isRequestWithLabelPayload } from '.';
import { ActionType } from './action';

describe('request types', () => {
  describe('isRequestWithActionPayload', () => {
    it('returns false for mismatching data', () => {
      const fail1: BaseRequest = {
        type: 'fail',
      };
      const fail2: BaseRequest = {
        type: 'fail',
        payload: "string"
      };
      const fail3: BaseRequest = {
        type: 'fail',
        payload: null
      };
      const fail4: BaseRequest = {
        type: 'fail',
        payload: {}
      };
      const fail5: BaseRequest = {
        type: 'fail',
        payload: { actions: "string" }
      };

      expect(isRequestWithActionPayload(fail1)).to.eql(false);
      expect(isRequestWithActionPayload(fail2)).to.eql(false);
      expect(isRequestWithActionPayload(fail3)).to.eql(false);
      expect(isRequestWithActionPayload(fail4)).to.eql(false);
      expect(isRequestWithActionPayload(fail5)).to.eql(false);
    });

    it('returns true for matching data', () => {
      const pass1: BaseRequest = {
        type: 'pass',
        payload: { actions: [] }
      };
      const pass2: BaseRequest = {
        type: 'pass',
        payload: {
          actions: [ 
            { 
              type: ActionType.OPEN_URL, 
              payload: { url: "https://example.com" }
            } 
          ] 
        }
      };
      const pass3: BaseRequest = {
        type: 'pass',
        payload: {
          actions: [ 
            { 
              type: ActionType.OPEN_URL, 
              payload: { url: "https://example.com" }
            } 
          ],
          label: "extraneous property"
        }
      };

      expect(isRequestWithActionPayload(pass1)).to.eql(true);
      expect(isRequestWithActionPayload(pass2)).to.eql(true);
      expect(isRequestWithActionPayload(pass3)).to.eql(true);
    });
  });

  describe('isRequestWithActionPayload', () => {
    it('returns false for mismatching data', () => {
      const fail1: BaseRequest = {
        type: 'fail',
      };
      const fail2: BaseRequest = {
        type: 'fail',
        payload: "string"
      };
      const fail3: BaseRequest = {
        type: 'fail',
        payload: null
      };
      const fail4: BaseRequest = {
        type: 'fail',
        payload: {}
      };
      const fail5: BaseRequest = {
        type: 'fail',
        payload: { label: [] }
      };

      expect(isRequestWithLabelPayload(fail1)).to.eql(false);
      expect(isRequestWithLabelPayload(fail2)).to.eql(false);
      expect(isRequestWithLabelPayload(fail3)).to.eql(false);
      expect(isRequestWithLabelPayload(fail4)).to.eql(false);
      expect(isRequestWithLabelPayload(fail5)).to.eql(false);
    });

    it('returns true for matching data', () => {
      const pass1: BaseRequest = {
        type: 'pass',
        payload: { label: "string" }
      };
      const pass2: BaseRequest = {
        type: 'pass',
        payload: {
          actions: [],
          label: "string"
        }
      };
      const pass3: BaseRequest = {
        type: 'pass',
        payload: {
          actions: [ 
            { 
              type: ActionType.OPEN_URL, 
              payload: { url: "https://example.com" }
            } 
          ],
          label: "string"
        }
      };

      expect(isRequestWithLabelPayload(pass1)).to.eql(true);
      expect(isRequestWithLabelPayload(pass2)).to.eql(true);
      expect(isRequestWithLabelPayload(pass3)).to.eql(true);
    });
  });
});
