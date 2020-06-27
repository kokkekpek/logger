import {TransformableInfo} from 'logform'
import * as winston from 'winston'
import WinstonDataWrapper from '../WinstonDataWrapper'

function print(info: TransformableInfo): string {
    const {
        timestamp,
        level,
        message,
        ...args
    } = info

    const data: string = formatData(args)
    return `${timestamp} [${level}]: ${message} ${data}`
}

/**
 * Remove symbols from object and colorize
 * @param args {Object} Example:
 *     {
 *         data: {
 *             name: 'ReplyError',
 *             message: 'ERR invalid password',
 *             stack: 'ReplyError: ERR invalid password\n' +
 *             '    at parseError (/srv/www/casino/casino/telegram-bot/node_modules/redis-parser/lib/parser.js:193:12)\n' +
 *             '    at parseType (/srv/www/casino/casino/telegram-bot/node_modules/redis-parser/lib/parser.js:303:14)'
 *         },
 *         [Symbol(level)]: 'error',
 *         [Symbol(splat)]: [ { data: [Object] } ],
 *         [Symbol(message)]: '{'data':{'name':'ReplyError'...
 *     }
 * @return {string} Example:
 *     'ReplyError. ERR invalid password. ReplyError: ERR invalid password\n' +
 *     '    at parseError (/srv/www/casino/casino/telegram-bot/node_modules/redis-parser/lib/parser.js:193:12)\n' +
 *     '    at parseType (/srv/www/casino/casino/telegram-bot/node_modules/redis-parser/lib/parser.js:303:14)'
 */
function formatData(args: Object): string {
    if (!Object.keys(args).length) return ''
    const data: any = WinstonDataWrapper.unwrapData(args)
    if (!data) return ''
    return `${data.name}. ${data.message}. ${data.stack}.`
}

export default winston.format.printf(print)