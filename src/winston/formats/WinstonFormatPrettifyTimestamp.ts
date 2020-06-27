import {TransformableInfo} from 'logform'
import * as winston from 'winston'

const TIMESTAMP_LENGTH: number = 19
const TIMESTAMP_OLD_SEPARATOR: string = 'T'
const TIMESTAMP_NEW_SEPARATOR: string = ' '

/**
 * Original info.timestamp:
 *     '2020-10-10T10:10:10.111Z'
 * New info.timestamp:
 *     '2020-10-10 10:10:10'
 */
function prettifyTimestamp(info: TransformableInfo): TransformableInfo {
    if (info.timestamp)
        info.timestamp = info.timestamp
            .slice(0, TIMESTAMP_LENGTH)
            .replace(TIMESTAMP_OLD_SEPARATOR, TIMESTAMP_NEW_SEPARATOR)
    return info
}

export default winston.format(prettifyTimestamp)