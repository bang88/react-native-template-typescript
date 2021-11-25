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
  enabled: __DEV__,
}

const log = logger.createLogger(defaultConfig)

export default {
  info: (...args: any) => {
    log.info(...args)
  },
  warn: (...args: any) => {
    log.warn(...args)
  },
}
