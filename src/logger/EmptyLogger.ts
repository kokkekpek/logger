import LoggerInterface from './LoggerInterface'
import ObjectInterface from './data/ObjectInterface'

export default class EmptyLogger implements LoggerInterface {
    public info(message: string, data: ObjectInterface | undefined = undefined): LoggerInterface {
        return this
    }

    public debug(message: string, data: ObjectInterface | undefined  = undefined): LoggerInterface {
        return this
    }

    public error(message: string, error: Error): LoggerInterface {
        return this
    }

    public finish(): Promise<void> {
        return new Promise((resolve: Function) => {
            resolve()
        })
    }
}