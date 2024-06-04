import { describe, expect, it } from 'vitest';

import type { BaseRequest } from '.';
import {
  hasActionPayload,
  hasLabelPayload,
  isActionRequest,
  isGeneralRequest,
  isIntentRequest,
  isLaunchRequest,
  isNoReplyRequest,
  isPathRequest,
  isTextRequest,
  RequestType,
} from '.';
import { ActionType } from './action';

describe('request types', () => {
  describe('hasActionPayload', () => {
    it('returns false for mismatching data', () => {
      const fail1: BaseRequest = {
        type: 'fail',
      };
      const fail2: BaseRequest = {
        type: 'fail',
        payload: 'string',
      };
      const fail3: BaseRequest = {
        type: 'fail',
        payload: null,
      };
      const fail4: BaseRequest = {
        type: 'fail',
        payload: {},
      };
      const fail5: BaseRequest = {
        type: 'fail',
        payload: { actions: 'string' },
      };

      expect(hasActionPayload(fail1)).to.eql(false);

      expect(hasActionPayload(fail2)).to.eql(false);

      expect(hasActionPayload(fail3)).to.eql(false);

      expect(hasActionPayload(fail4)).to.eql(false);

      expect(hasActionPayload(fail5)).to.eql(false);
    });

    it('returns true for matching data', () => {
      const pass1: BaseRequest = {
        type: 'pass',
        payload: { actions: [] },
      };
      const pass2: BaseRequest = {
        type: 'pass',
        payload: {
          actions: [
            {
              type: ActionType.OPEN_URL,
              payload: { url: 'https://example.com' },
            },
          ],
        },
      };
      const pass3: BaseRequest = {
        type: 'pass',
        payload: {
          actions: [
            {
              type: ActionType.OPEN_URL,
              payload: { url: 'https://example.com' },
            },
          ],
          label: 'extraneous property',
        },
      };

      expect(hasActionPayload(pass1)).to.eql(true);
      expect(hasActionPayload(pass2)).to.eql(true);
      expect(hasActionPayload(pass3)).to.eql(true);
    });
  });

  describe('hasLabelPayload', () => {
    it('returns false for mismatching data', () => {
      const fail1: BaseRequest = {
        type: 'fail',
      };
      const fail2: BaseRequest = {
        type: 'fail',
        payload: 'string',
      };
      const fail3: BaseRequest = {
        type: 'fail',
        payload: null,
      };
      const fail4: BaseRequest = {
        type: 'fail',
        payload: {},
      };
      const fail5: BaseRequest = {
        type: 'fail',
        payload: { label: [] },
      };

      expect(hasLabelPayload(fail1)).to.eql(false);
      expect(hasLabelPayload(fail2)).to.eql(false);
      expect(hasLabelPayload(fail3)).to.eql(false);
      expect(hasLabelPayload(fail4)).to.eql(false);
      expect(hasLabelPayload(fail5)).to.eql(false);
    });

    it('returns true for matching data', () => {
      const pass1: BaseRequest = {
        type: 'pass',
        payload: { label: 'string' },
      };
      const pass2: BaseRequest = {
        type: 'pass',
        payload: {
          actions: [],
          label: 'string',
        },
      };
      const pass3: BaseRequest = {
        type: 'pass',
        payload: {
          actions: [
            {
              type: ActionType.OPEN_URL,
              payload: { url: 'https://example.com' },
            },
          ],
          label: 'string',
        },
      };

      expect(hasLabelPayload(pass1)).to.eql(true);
      expect(hasLabelPayload(pass2)).to.eql(true);
      expect(hasLabelPayload(pass3)).to.eql(true);
    });
  });

  describe('isTextRequest', () => {
    it('fails if type is not text', () => {
      const data: BaseRequest = {
        type: 'fail',
      };

      expect(isTextRequest(data)).to.eql(false);
    });

    it('passes if type is text', () => {
      const data: BaseRequest = {
        type: RequestType.TEXT,
      };

      expect(isTextRequest(data)).to.eql(true);
    });
  });

  describe('isActionRequest', () => {
    it('fails if type is not action', () => {
      const data: BaseRequest = {
        type: 'fail',
      };

      expect(isActionRequest(data)).to.eql(false);
    });

    it('passes if type is action', () => {
      const data: BaseRequest = {
        type: RequestType.ACTION,
      };

      expect(isActionRequest(data)).to.eql(true);
    });
  });

  describe('isLaunchRequest', () => {
    it('fails if type is not launch', () => {
      const data: BaseRequest = {
        type: 'fail',
      };

      expect(isLaunchRequest(data)).to.eql(false);
    });

    it('passes if type is launch', () => {
      const data: BaseRequest = {
        type: RequestType.LAUNCH,
      };

      expect(isLaunchRequest(data)).to.eql(true);
    });
  });

  describe('isNoReplyRequest', () => {
    it('fails if type is not no reply', () => {
      const data: BaseRequest = {
        type: 'fail',
      };

      expect(isNoReplyRequest(data)).to.eql(false);
    });

    it('passes if type is no reply', () => {
      const data: BaseRequest = {
        type: RequestType.NO_REPLY,
      };

      expect(isNoReplyRequest(data)).to.eql(true);
    });
  });

  describe('isIntentRequest', () => {
    it('fails if type is not intent', () => {
      const data: BaseRequest = {
        type: 'fail',
      };

      expect(isIntentRequest(data)).to.eql(false);
    });

    it('passes if type is intent', () => {
      const data: BaseRequest = {
        type: RequestType.INTENT,
      };

      expect(isIntentRequest(data)).to.eql(true);
    });
  });

  describe('isGeneralRequest', () => {
    it('fails if type is not general', () => {
      const fail1: BaseRequest = {
        type: RequestType.ACTION,
      };
      const fail2: BaseRequest = {
        type: RequestType.INTENT,
      };
      const fail3: BaseRequest = {
        type: RequestType.LAUNCH,
      };
      const fail4: BaseRequest = {
        type: RequestType.NO_REPLY,
      };
      const fail5: BaseRequest = {
        type: RequestType.TEXT,
      };

      expect(isGeneralRequest(fail1)).to.eql(false);
      expect(isGeneralRequest(fail2)).to.eql(false);
      expect(isGeneralRequest(fail3)).to.eql(false);
      expect(isGeneralRequest(fail4)).to.eql(false);
      expect(isGeneralRequest(fail5)).to.eql(false);
    });

    it('passes if type is general', () => {
      const pass1: BaseRequest = {
        type: 'path-abcdefg',
      };
      const pass2: BaseRequest = {
        type: 'user-defined-type',
      };

      expect(isGeneralRequest(pass1)).to.eql(true);
      expect(isGeneralRequest(pass2)).to.eql(true);
    });
  });

  describe('isPathRequest', () => {
    it('fails if type is not text', () => {
      const fail1: BaseRequest = {
        type: RequestType.ACTION,
      };
      const fail2: BaseRequest = {
        type: RequestType.INTENT,
      };
      const fail3: BaseRequest = {
        type: RequestType.LAUNCH,
      };
      const fail4: BaseRequest = {
        type: RequestType.NO_REPLY,
      };
      const fail5: BaseRequest = {
        type: RequestType.TEXT,
      };
      const fail6: BaseRequest = {
        type: 'user-defined-type',
      };

      expect(isPathRequest(fail1)).to.eql(false);
      expect(isPathRequest(fail2)).to.eql(false);
      expect(isPathRequest(fail3)).to.eql(false);
      expect(isPathRequest(fail4)).to.eql(false);
      expect(isPathRequest(fail5)).to.eql(false);
      expect(isPathRequest(fail6)).to.eql(false);
    });

    it('passes if type is text', () => {
      const data: BaseRequest = {
        type: 'path-abcdefg',
      };

      expect(isPathRequest(data)).to.eql(true);
    });
  });
});
