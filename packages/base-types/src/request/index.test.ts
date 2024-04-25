import { describe, expect, it } from "vitest";
import { isBaseRequest, BaseRequest, RequestType, TextRequest, isTextRequest, ActionRequest, isActionRequest, LaunchRequest, isLaunchRequest, NoReplyRequest, isNoReplyRequest, IntentRequestPayload, IntentRequest, isIntentRequest, GeneralRequest, isGeneralRequest } from ".";
import { ActionType } from "./action";

describe('Request type guards', () => {
    it('isBaseRequest', () => {
        const type = 'request-type';

        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = {};
        const fail5 = { payload: {} };
        const fail6 = { type: 1, payload: {} };
        const fail7 = { type: true, payload: {} };
        const fail8 = { type: {}, payload: {} };

        const pass1: BaseRequest = { type };
        const pass2: BaseRequest = { type, payload: { key: 'value' } };
        const pass3: BaseRequest = { type, payload: 'string payload' };
        const pass4: BaseRequest = { type, payload: 1 };
        const pass5: BaseRequest = { type, payload: true };
        const pass6: BaseRequest = { type, payload: [1, true, 'string payload'] };
        const pass7: BaseRequest = { type, payload: [1, true, 'string payload'], diagramID: 'diagram-id' };

        expect(isBaseRequest(fail1)).toBe(false);
        expect(isBaseRequest(fail2)).toBe(false);
        expect(isBaseRequest(fail3)).toBe(false);
        expect(isBaseRequest(fail4)).toBe(false);
        expect(isBaseRequest(fail5)).toBe(false);
        expect(isBaseRequest(fail6)).toBe(false);
        expect(isBaseRequest(fail7)).toBe(false);
        expect(isBaseRequest(fail8)).toBe(false);

        expect(isBaseRequest(pass1)).toBe(true);
        expect(isBaseRequest(pass2)).toBe(true);
        expect(isBaseRequest(pass3)).toBe(true);
        expect(isBaseRequest(pass4)).toBe(true);
        expect(isBaseRequest(pass5)).toBe(true);
        expect(isBaseRequest(pass6)).toBe(true);
        expect(isBaseRequest(pass7)).toBe(true);
    });

    it('isTextRequest', () => {
        const type = RequestType.TEXT;
        const payload = 'text-payload';

        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = {};
        const fail5 = { type };
        const fail6 = { payload };
        const fail7 = { type: 'wrong-type', payload };
        const fail8 = { type: 1, payload };
        const fail9 = { type: true, payload };
        const fail10 = { type: {}, payload };

        const pass1: TextRequest = { type, payload };

        expect(isTextRequest(fail1)).toBe(false);
        expect(isTextRequest(fail2)).toBe(false);
        expect(isTextRequest(fail3)).toBe(false);
        expect(isTextRequest(fail4)).toBe(false);
        expect(isTextRequest(fail5)).toBe(false);
        expect(isTextRequest(fail6)).toBe(false);
        expect(isTextRequest(fail7)).toBe(false);
        expect(isTextRequest(fail8)).toBe(false);
        expect(isTextRequest(fail9)).toBe(false);
        expect(isTextRequest(fail10)).toBe(false);

        expect(isTextRequest(pass1)).toBe(true);
    });

    it('isActionRequest', () => {
        const type = RequestType.ACTION;
        const payload = {
            actions: [
                {
                    type: 'action-type',
                    payload: {}
                },
                {
                    type: ActionType.OPEN_URL,
                    payload: {
                        url: 'https://example.com'
                    }
                }
            ],
            label: "action-request-label"
        };

        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = {};
        const fail5 = { payload };
        const fail6 = { type: 'wrong-type', payload };
        const fail7 = { type: 1, payload };
        const fail8 = { type: true, payload };
        const fail9 = { type: {}, payload };
        const fail10 = { 
            type,
            payload: {
                ...payload,
                label: 1
            }
        };
        const fail11 = { 
            type,
            payload: {
                ...payload,
                actions: [ { payload: 'not-a-valid-action' } ]
            }
        };

        const pass1: ActionRequest = { type };
        const pass2: ActionRequest = { type, payload };
        const pass3: ActionRequest = { type, payload: { label: payload.label } };
        const pass4: ActionRequest = { type, payload: { actions: payload.actions } };

        expect(isActionRequest(fail1)).toBe(false);
        expect(isActionRequest(fail2)).toBe(false);
        expect(isActionRequest(fail3)).toBe(false);
        expect(isActionRequest(fail4)).toBe(false);
        expect(isActionRequest(fail5)).toBe(false);
        expect(isActionRequest(fail6)).toBe(false);
        expect(isActionRequest(fail7)).toBe(false);
        expect(isActionRequest(fail8)).toBe(false);
        expect(isActionRequest(fail9)).toBe(false);
        expect(isActionRequest(fail10)).toBe(false);
        expect(isActionRequest(fail11)).toBe(false);

        expect(isActionRequest(pass1)).toBe(true);
        expect(isActionRequest(pass2)).toBe(true);
        expect(isActionRequest(pass3)).toBe(true);
        expect(isActionRequest(pass4)).toBe(true);
    });

    it('isLaunchRequest', () => {
        const type = RequestType.LAUNCH;

        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = {};
        const fail5 = { type: 'wrong-type'};
        const fail6 = { type: 1 };
        const fail7 = { type: true};
        const fail8 = { type: {} };
        const fail9 = { type, payload: true };
        const fail10 = { type, payload: 'unexpected-payload' };
        const fail11 = { type, payload: 1 };
        const fail12 = { type, payload: null };

        const pass1: LaunchRequest = { type };
        const pass2: LaunchRequest = { type, payload: {} };
        const pass3: LaunchRequest = { type, payload: { persona: 'persona-value' } };

        expect(isLaunchRequest(fail1)).toBe(false);
        expect(isLaunchRequest(fail2)).toBe(false);
        expect(isLaunchRequest(fail3)).toBe(false);
        expect(isLaunchRequest(fail4)).toBe(false);
        expect(isLaunchRequest(fail5)).toBe(false);
        expect(isLaunchRequest(fail6)).toBe(false);
        expect(isLaunchRequest(fail7)).toBe(false);
        expect(isLaunchRequest(fail8)).toBe(false);
        expect(isLaunchRequest(fail9)).toBe(false);
        expect(isLaunchRequest(fail10)).toBe(false);
        expect(isLaunchRequest(fail11)).toBe(false);
        expect(isLaunchRequest(fail12)).toBe(false);

        expect(isLaunchRequest(pass1)).toBe(true);
        expect(isLaunchRequest(pass2)).toBe(true);
        expect(isLaunchRequest(pass3)).toBe(true);
    });

    it('isNoReplyRequest', () => {
        const type = RequestType.NO_REPLY;

        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = {};
        const fail5 = { type: 'wrong-type'};
        const fail6 = { type: 1 };
        const fail7 = { type: true};
        const fail8 = { type: {} };

        const pass1: NoReplyRequest = { type };
        const pass2 = { type, payload: true };
        const pass3 = { type, payload: 'unexpected-payload' };
        const pass4 = { type, payload: 1 };
        const pass5 = { type, payload: null };

        expect(isNoReplyRequest(fail1)).toBe(false);
        expect(isNoReplyRequest(fail2)).toBe(false);
        expect(isNoReplyRequest(fail3)).toBe(false);
        expect(isNoReplyRequest(fail4)).toBe(false);
        expect(isNoReplyRequest(fail5)).toBe(false);
        expect(isNoReplyRequest(fail6)).toBe(false);
        expect(isNoReplyRequest(fail7)).toBe(false);
        expect(isNoReplyRequest(fail8)).toBe(false);

        expect(isNoReplyRequest(pass1)).toBe(true);
        expect(isNoReplyRequest(pass2)).toBe(true);
        expect(isNoReplyRequest(pass3)).toBe(true);
        expect(isNoReplyRequest(pass4)).toBe(true);
        expect(isNoReplyRequest(pass5)).toBe(true);
    });

    it('isIntentRequest', () => {
        const type = RequestType.INTENT;
        const payload1: IntentRequestPayload = {
            query: "I want a large pizza",
            intent: { name: "order pizza" },
            entities: [
                {
                    name: "size",
                    value: "large",
                    query: "large",
                },
                {
                    name: "item",
                    value: "pizza",
                }
            ],
        };
        const payload2: IntentRequestPayload = {
            ...payload1,
            confidence: 97.8,
            data: {
                key: 'value'
            }
        };

        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = {};
        const fail5 = { type: 'wrong-type', payload: payload1};
        const fail6 = { type: 1, payload: payload1 };
        const fail7 = { type: true, payload: payload1 };
        const fail8 = { type: {}, payload: payload1 };

        const pass1: IntentRequest = { type, payload: payload1 };
        const pass2: IntentRequest = { type, payload: payload2 };

        expect(isIntentRequest(fail1)).toBe(false);
        expect(isIntentRequest(fail2)).toBe(false);
        expect(isIntentRequest(fail3)).toBe(false);
        expect(isIntentRequest(fail4)).toBe(false);
        expect(isIntentRequest(fail5)).toBe(false);
        expect(isIntentRequest(fail6)).toBe(false);
        expect(isIntentRequest(fail7)).toBe(false);
        expect(isIntentRequest(fail8)).toBe(false);

        expect(isIntentRequest(pass1)).toBe(true);
        expect(isIntentRequest(pass2)).toBe(true);
    });

    it('isGeneralRequest', () => {
        const type = 'some-general-request-type';
        const payload = {
            actions: [
                {
                    type: 'action-type',
                    payload: {}
                },
                {
                    type: ActionType.OPEN_URL,
                    payload: {
                        url: 'https://example.com'
                    }
                }
            ],
            label: "action-request-label"
        };

        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = {};
        const fail5 = { payload };
        const fail6 = { type: RequestType.ACTION, payload };
        const fail7 = { type: RequestType.INTENT, payload };
        const fail8 = { type: RequestType.LAUNCH, payload };
        const fail9 = { type: RequestType.NO_REPLY, payload };
        const fail10 = { type: RequestType.TEXT, payload };
        const fail11 = { type: 1, payload };
        const fail12 = { type: true, payload };
        const fail13 = { type: {}, payload };
        const fail14 = { 
            type,
            payload: {
                ...payload,
                label: 1
            }
        };
        const fail15 = { 
            type,
            payload: {
                ...payload,
                actions: [ { payload: 'not-a-valid-action' } ]
            }
        };

        const pass1: GeneralRequest = { type };
        const pass2: GeneralRequest = { type, payload };
        const pass3: GeneralRequest = { type, payload: { label: payload.label } };
        const pass4: GeneralRequest = { type, payload: { actions: payload.actions } };

        expect(isGeneralRequest(fail1)).toBe(false);
        expect(isGeneralRequest(fail2)).toBe(false);
        expect(isGeneralRequest(fail3)).toBe(false);
        expect(isGeneralRequest(fail4)).toBe(false);
        expect(isGeneralRequest(fail5)).toBe(false);
        expect(isGeneralRequest(fail6)).toBe(false);
        expect(isGeneralRequest(fail7)).toBe(false);
        expect(isGeneralRequest(fail8)).toBe(false);
        expect(isGeneralRequest(fail9)).toBe(false);
        expect(isGeneralRequest(fail10)).toBe(false);
        expect(isGeneralRequest(fail11)).toBe(false);
        expect(isGeneralRequest(fail12)).toBe(false);
        expect(isGeneralRequest(fail13)).toBe(false);
        expect(isGeneralRequest(fail14)).toBe(false);
        expect(isGeneralRequest(fail15)).toBe(false);

        expect(isGeneralRequest(pass1)).toBe(true);
        expect(isGeneralRequest(pass2)).toBe(true);
        expect(isGeneralRequest(pass3)).toBe(true);
        expect(isGeneralRequest(pass4)).toBe(true);
    });
});