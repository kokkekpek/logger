# README
## Add to project
```sh
yarn add kokkekpek/logger#^1.1
```

## Use
**config.ts**
```typescript
export default {
    console: {
        /**
         * Output in console.
         */
        enabled: true,

        /**
         * Log level from RFC5424.
         * @see https://tools.ietf.org/html/rfc5424
         * Variables:
         *     'emerg'
         *     'alert'
         *     'crit'
         *     'error'
         *     'warning'
         *     'notice'
         *     'info'
         *     'debug'
         */
        level: 'debug'
    },
    file: {
        /**
         * Output in file.
         */
        enabled: true,

        /**
         * Log level from RFC5424.
         * IMPORTANT!!! DO NOT SET DEBUG LEVEL ON PRODUCTION.
         * If you do this. Your redis password and bot token will be written to the text log. This is not good.
         * @see https://tools.ietf.org/html/rfc5424
         * Variables:
         *     'emerg'
         *     'alert'
         *     'crit'
         *     'error'
         *     'warning'
         *     'notice'
         *     'info'
         *     'debug'
         */
        level: 'info',

        /**
         * Path to logs directory.
         */
        directory: './log',

        /**
         * Maximum file size in bytes.
         */
        maxSize: 10 * 1024 * 1024
    }
}
```

**index.ts**
```typescript
import config from './config'
import Logger, {LoggerInterface} from '../'

const logger: LoggerInterface = new Logger(config)

/********
 * INFO *
 ********/
logger.info('Hello world')
logger.info('My name is', {
    name: 'James',
    surname: 'Bond'
})

/*********
 * DEBUG *
 *********/
logger.debug('Debug')
logger.debug('Debug secret info', {
    username: 'admin',
    password: '12345'
})

/*********
 * ERROR *
 *********/
logger.error('Oops', new Error('FATAL'))

/**********
 * FINISH *
 **********/
logger.finish('exit').then(() => {
    process.exit()
})
```

## DEV
Install modules
```sh
yarn install
```

Build
```sh
yarn build
````

Run example
```sh
yarn example
````

Check
* log/actions.log
* log/errors.log