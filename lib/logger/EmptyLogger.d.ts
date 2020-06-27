import LoggerInterface from './LoggerInterface';
import ObjectInterface from './data/ObjectInterface';
export default class EmptyLogger implements LoggerInterface {
    info(message: string, data?: ObjectInterface | undefined): LoggerInterface;
    debug(message: string, data?: ObjectInterface | undefined): LoggerInterface;
    error(message: string, error: Error): LoggerInterface;
    finish(): Promise<void>;
}
