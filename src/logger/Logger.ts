import * as winston from 'winston'
import {Logger as WinstonLogger, LoggerOptions} from 'winston'
import WinstonTransports from './winston/WinstonTransports'
import WinstonDataWrapper from './winston/WinstonDataWrapper'
import ConfigInterface from './config/ConfigInterface'
import LoggerInterface from './LoggerInterface'

export default class Logger implements LoggerInterface {
    private _logger: WinstonLogger

    public constructor(config: ConfigInterface) {
        const options: LoggerOptions = {
            transports: [
                WinstonTransports.console(config.console),
                WinstonTransports.actions(config.file),
                WinstonTransports.errors(config.file)
            ]
        }
        this._logger = winston.createLogger(options)
    }

    public info(message: string, data: Object = undefined): LoggerInterface {
        this._logger.info(message, WinstonDataWrapper.wrapData(data))
        return this
    }

    public debug(message: string, data: Object = undefined): LoggerInterface {
        this._logger.debug(message, WinstonDataWrapper.wrapData(data))
        return this
    }

    public error(message: string, error: Error): LoggerInterface {
        const data = {
            name: error.name,
            message: error.message,
            stack: error.stack
        }
        this._logger.error(message, WinstonDataWrapper.wrapData(data))
        return this
    }

    public finish(message: string): Promise<void> {
        return new Promise((resolve: Function) => {
            this._logger.info(message, resolve);
        })
    }
}