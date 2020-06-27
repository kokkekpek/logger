import {TransformableInfo} from 'logform'
import * as winston from 'winston'
import * as util from 'util'
import WinstonDataWrapper from '../WinstonDataWrapper'
import ObjectInterface from '../../data/ObjectInterface'

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
 * Remove Symbol fields from object and colorize
 * @param args {Object} Example:
 *     {
 *         data: {
 *             'token': 'XXX',
 *             'settings': { webHook: { port: 3000, autoOpen: false } }
 *         }
 *         [Symbol(level)]: 'debug',
 *         [Symbol(splat)]: [ [ 'XXX', [Object] ] ],
 *         [Symbol(message)]: '{'data':{'token':'XXX','settings':{'webHook':{'port':3000,'autoOpen':false}},'level':'debug','message':'CREATE TELEGRAM BOT'}}'
 *     }
 * @return {string} Example:
 *     {
 *         'token': 'XXX',
 *         'settings': { webHook: { port: 3000, autoOpen: false } }
 *     }
 */
function formatData(args: Object): string {
    if (!Object.keys(args).length) return ''
    const data: ObjectInterface | undefined = WinstonDataWrapper.unwrapData(args)
    if (!data) return ''
    const result: ObjectInterface = {}
    for (const key in data)
        result[key] = data[key]
    return util.inspect(result, { colors: true, depth: null})
}

export default winston.format.printf(print)