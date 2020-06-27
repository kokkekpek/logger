export default interface LoggerInterface {
    info(message: string, data?: Object): LoggerInterface
    debug(message: string, data?: Object): LoggerInterface
    error(message: string, error: Error): LoggerInterface
    finish(message: string): Promise<void>
}