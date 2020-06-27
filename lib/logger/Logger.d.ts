import ConfigInterface from './config/ConfigInterface';
import LoggerInterface from './LoggerInterface';
import ObjectInterface from './data/ObjectInterface';
export default class Logger implements LoggerInterface {
    private _logger;
    constructor(config: ConfigInterface);
    info(message: string, data?: ObjectInterface | undefined): LoggerInterface;
    debug(message: string, data?: ObjectInterface | undefined): LoggerInterface;
    error(message: string, error: Error): LoggerInterface;
    finish(message: string): Promise<void>;
}
