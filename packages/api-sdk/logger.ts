import Logger from '@voiceflow/logger';

let options = {};

if (process.env.DEBUG === 'true') {
  options = { level: 'debug', stackTrace: true, pretty: true };
} else if (['local', 'test'].includes(process.env.NODE_ENV!)) {
  options = { level: 'info', stackTrace: true, pretty: true };
}

const log = new Logger(options);

export default log;
