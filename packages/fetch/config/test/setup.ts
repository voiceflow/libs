// eslint-disable-next-line max-classes-per-file
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

chai.use(chaiAsPromised);
chai.use(sinonChai);

Object.assign(global, {
  window: {
    fetch: () => undefined,
  },
  URL: class {},
  Request: class {},
});
