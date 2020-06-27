import {TransformableInfo} from 'logform'
import * as winston from 'winston'

/**
 * Original info.level:
 *     'debug'
 * New info.level:
 *     'DEBUG'
 */
function levelUpperCaseFormat(info: TransformableInfo): TransformableInfo {
    if (info.level)
        info.level = info.level.toUpperCase()
    return info
}

export default winston.format(levelUpperCaseFormat)