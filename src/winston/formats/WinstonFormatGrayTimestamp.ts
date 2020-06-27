import {TransformableInfo} from 'logform'
import * as winston from 'winston'
import {gray} from 'colors/safe'

function grayTimestamp(info: TransformableInfo): TransformableInfo {
    if (info.timestamp)
        info.timestamp = gray(info.timestamp)
    return info
}

export default winston.format(grayTimestamp)