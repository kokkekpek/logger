import ConfigInterface from './config/ConfigInterface';
import LoggerInterface from './LoggerInterface';
export default class Logger implements LoggerInterface {
    private _logger;
    constructor(config: ConfigInterface);
    info(message: string, data?: Object): LoggerInterface;
    debug(message: string, data?: Object): LoggerInterface;
    error(message: string, error: Error): LoggerInterface;
    finish(message: string): Promise<void>;
}
