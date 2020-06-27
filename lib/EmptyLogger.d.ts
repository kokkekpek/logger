import LoggerInterface from './LoggerInterface';
export default class EmptyLogger implements LoggerInterface {
    info(message: string, data?: Object): LoggerInterface;
    debug(message: string, data?: Object): LoggerInterface;
    error(message: string, error: Error): LoggerInterface;
    finish(): Promise<void>;
}
