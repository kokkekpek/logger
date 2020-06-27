import * as winston from 'winston'
import {Format} from 'logform'
import {ConsoleTransportInstance, FileTransportInstance} from 'winston/lib/winston/transports'
import WinstonFormatPrettifyTimestamp from './formats/WinstonFormatPrettifyTimestamp'
import WinstonFormatLevelUpperCase from './formats/WinstonFormatLevelUpperCase'
import WinstonFormatGrayTimestamp from './formats/WinstonFormatGrayTimestamp'
import WinstonFormatConsolePrint from './prints/WinstonFormatConsolePrint'
import WinstonFormatErrorFilePrint from './prints/WinstonFormatErrorFilePrint'
import ConfigConsoleInterface from '../config/ConfigConsoleInterface'
import ConfigFileInterface from '../config/ConfigFileInterface'

export default class WinstonTransports {
    private static readonly _ACTIONS_FILE_NAME: string = 'actions.log'
    private static readonly _ERRORS_FILE_NAME: string = 'errors.log'
    private static readonly _ERROR_LEVEL: string = 'error'

    public static console(options: ConfigConsoleInterface): ConsoleTransportInstance {
        const consoleTransportFormat: Format = winston.format.combine(
            WinstonFormatLevelUpperCase(),
            winston.format.colorize(),
            winston.format.timestamp(),
            WinstonFormatPrettifyTimestamp(),
            WinstonFormatGrayTimestamp(),
            WinstonFormatConsolePrint
        )
        return  new winston.transports.Console({
            format: consoleTransportFormat,
            level: options.level,
            silent: !options.enabled
        })
    }

    public static actions(options: ConfigFileInterface): FileTransportInstance {
        const fileTransportFormat: Format = winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        )
        return  new winston.transports.File({
            filename: `${options.directory}/${WinstonTransports._ACTIONS_FILE_NAME}`,
            maxsize: options.maxSize,
            format: fileTransportFormat,
            level: options.level,
            silent: !options.enabled
        })
    }

    public static errors(options: ConfigFileInterface): FileTransportInstance {
        const fileTransportFormat: Format = winston.format.combine(
            winston.format.timestamp(),
            WinstonFormatPrettifyTimestamp(),
            WinstonFormatErrorFilePrint
        )
        return  new winston.transports.File({
            filename: `${options.directory}/${WinstonTransports._ERRORS_FILE_NAME}`,
            maxsize: options.maxSize,
            format: fileTransportFormat,
            level: WinstonTransports._ERROR_LEVEL,
            silent: !options.enabled
        })
    }
}