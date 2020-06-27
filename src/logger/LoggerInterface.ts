import ObjectInterface from './data/ObjectInterface'

export default interface LoggerInterface {
    info(message: string, data?: ObjectInterface | undefined): LoggerInterface
    debug(message: string, data?: ObjectInterface | undefined): LoggerInterface
    error(message: string, error: Error): LoggerInterface
    finish(message: string): Promise<void>
}