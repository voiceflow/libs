import { describe, it, expect } from 'vitest';
import { ActionPayload, ActionType, BaseAction, OpenURLAction, isActionPayload, isBaseAction, isOpenURLAction } from './action';

describe('Action request type guards', () => {
    const type = "request-type";
    const payload = { key: 'value' };

    it('isBaseAction', async () => {
        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = {};
        const fail5 = { type };
        const fail6 = { payload };
        const fail7 = { type: 1, payload };
        const fail8 = { type: true, payload };
        const fail9 = { type: {}, payload };

        const pass1: BaseAction = { type, payload };
        const pass2: BaseAction = { type, payload: 'string payload' };
        const pass3: BaseAction = { type, payload: 1 };
        const pass4: BaseAction = { type, payload: true };
        const pass5: BaseAction = { type, payload: [1, true, 'string payload'] };

        expect(isBaseAction(fail1)).toBe(false);
        expect(isBaseAction(fail2)).toBe(false);
        expect(isBaseAction(fail3)).toBe(false);
        expect(isBaseAction(fail4)).toBe(false);
        expect(isBaseAction(fail5)).toBe(false);
        expect(isBaseAction(fail6)).toBe(false);
        expect(isBaseAction(fail7)).toBe(false);
        expect(isBaseAction(fail8)).toBe(false);
        expect(isBaseAction(fail9)).toBe(false);

        expect(isBaseAction(pass1)).toBe(true);
        expect(isBaseAction(pass2)).toBe(true);
        expect(isBaseAction(pass3)).toBe(true);
        expect(isBaseAction(pass4)).toBe(true);
        expect(isBaseAction(pass5)).toBe(true);
    });

    it('isActionPayload', async () => {
        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = { actions: 1 };
        const fail5 = { actions: 'hello' };
        const fail6 = { actions: {} };
        const fail7 = { actions: null };

        const pass1: ActionPayload = {};
        const pass2: ActionPayload = { actions: [] };
        const pass3: ActionPayload = {
            actions: [
                { type, payload },
                { type, payload: 1 },
                { type, payload: 'string' },
                { type, payload: true },
                { type, payload: null }
            ]
        };

        expect(isActionPayload(fail1)).toBe(false);
        expect(isActionPayload(fail2)).toBe(false);
        expect(isActionPayload(fail3)).toBe(false);
        expect(isActionPayload(fail4)).toBe(false);
        expect(isActionPayload(fail5)).toBe(false);
        expect(isActionPayload(fail6)).toBe(false);
        expect(isActionPayload(fail7)).toBe(false);

        expect(isActionPayload(pass1)).toBe(true);
        expect(isActionPayload(pass2)).toBe(true);
        expect(isActionPayload(pass3)).toBe(true);
    });

    it('isOpenURLAction', async () => {
        const type =  ActionType.OPEN_URL;
        const payload = { url: 'https://example.ca' };

        const fail1 = undefined;
        const fail2 = null;
        const fail3 = [];
        const fail4 = {};
        const fail5 = { type };
        const fail6 = { payload };
        const fail7 = { type: 1, payload };
        const fail8 = { type: true, payload };
        const fail9 = { type: {}, payload };
        const fail10 = { type: 'not-the-right-type', payload };
        const fail11 = { type, payload: { url: 1 } };
        const fail12 = { type, payload: { url: true } };
        const fail13 = { type, payload: { url: {} } };
        const fail14 = { type, payload: { url: [] } };
        const fail15 = { type, payload: { url: null } };

        const pass1: OpenURLAction = { type, payload };

        expect(isOpenURLAction(fail1)).toBe(false);
        expect(isOpenURLAction(fail2)).toBe(false);
        expect(isOpenURLAction(fail3)).toBe(false);
        expect(isOpenURLAction(fail4)).toBe(false);
        expect(isOpenURLAction(fail5)).toBe(false);
        expect(isOpenURLAction(fail6)).toBe(false);
        expect(isOpenURLAction(fail7)).toBe(false);
        expect(isOpenURLAction(fail8)).toBe(false);
        expect(isOpenURLAction(fail9)).toBe(false);
        expect(isOpenURLAction(fail10)).toBe(false);
        expect(isOpenURLAction(fail11)).toBe(false);
        expect(isOpenURLAction(fail12)).toBe(false);
        expect(isOpenURLAction(fail13)).toBe(false);
        expect(isOpenURLAction(fail14)).toBe(false);
        expect(isOpenURLAction(fail15)).toBe(false);

        expect(isOpenURLAction(pass1)).toBe(true);
    });
});
