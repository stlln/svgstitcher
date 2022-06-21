import log, {LogLevel, LogLevelNumbers} from 'loglevel';
import chalk from 'chalk';

type LogLevelOptionsMap = {
  [key in keyof LogLevel]: {
    prefix: string;
    color: string;
  };
};

const logLevelOptionsMap: LogLevelOptionsMap = {
  TRACE: {
    prefix: 'trace',
    color: 'cyan'
  },
  DEBUG: {
    prefix: 'verbose',
    color: 'magenta'
  },
  INFO: {
    prefix: 'info',
    color: 'blue'
  },
  WARN: {
    prefix: 'warning',
    color: 'orange'
  },
  ERROR: {
    color: 'red',
    prefix: 'error'
  },
  SILENT: {
    color: '',
    prefix: ''
  }
};

const originalFactory = log.methodFactory;

log.methodFactory = (methodName: string, logLevel: LogLevelNumbers, loggerName: string | symbol) => {
  const rawMethod = originalFactory(methodName, logLevel, loggerName);

  const logLevelOptions = logLevelOptionsMap[methodName.toUpperCase() as keyof LogLevel];

  const prefix = chalk.keyword(logLevelOptions.color)(logLevelOptions.prefix);

  return function (message) {
    rawMethod(`${prefix} ${message}`);
  };
};

log.setLevel(log.getLevel()); // Be sure to call setLevel method in order to apply plugin

export = log;
