import { FixtureExpect } from '@voiceflow/backend-utils';
import { expect } from 'chai';
import { Express } from 'express';
import sinon from 'sinon';
import request from 'supertest';

import { ControllerMap, MiddlewareMap } from '@/lib';
import Server from '@/server';

import GetApp from '../getAppForTest';
import fixtures from './fixture';

type Test = {
  method: 'get' | 'put' | 'post' | 'delete';
  expected: FixtureExpect<ControllerMap, MiddlewareMap>;
  calledPath: string;
};

const tests: Test[] = [
  {
    method: 'get',
    calledPath: '/example/:id',
    expected: {
      controllers: {
        example: {
          getExample: 1,
        },
      },
      middlewares: {
        example: {
          checkExample: 1,
        },
      },
      validations: {
        controllers: {
          example: {
            getExample: {
              PARAMS_ID: 1,
            },
          },
        },
      },
    },
  },
];

describe('example route unit tests', () => {
  let app: Express;
  let server: Server;

  afterEach(async () => {
    sinon.restore();

    await server.stop();
  });

  tests.forEach((test) => {
    it(`${test.method} ${test.calledPath}`, async () => {
      const fixture = await fixtures.createFixture();

      ({ app, server } = await GetApp(fixture));

      const response = await request(app)[test.method](test.calledPath);

      fixtures.checkFixture(fixture, test.expected);

      expect(response.body).to.eql({ done: 'done' });
    });
  });
});
