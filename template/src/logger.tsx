import { logger } from 'react-native-logs'
const defaultConfig = {
  severity: 'debug',
  transportOptions: {
    hideDate: false,
    dateFormat: 'utc',
    hideLevel: true,
    loggerName: 'logger',
    colors: 'ansi',
  },
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  async: true,
  dateFormat: 'time' as const,
  printLevel: true,
  printDate: true,
  enabled: true,
}

const log = logger.createLogger(defaultConfig)

export default {
  info: (...args: any) => {
    if (__DEV__) {
      log.info(...args)
      // tslint:disable-next-line: no-console
      console.log('\n')
    }
  },
  warn: (...args: any) => {
    if (__DEV__) {
      log.warn(...args)
      // tslint:disable-next-line: no-console
      console.log('\n')
    }
  },
}
