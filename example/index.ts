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