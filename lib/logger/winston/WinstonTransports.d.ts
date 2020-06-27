import { ConsoleTransportInstance, FileTransportInstance } from 'winston/lib/winston/transports';
import ConfigConsoleInterface from '../config/ConfigConsoleInterface';
import ConfigFileInterface from '../config/ConfigFileInterface';
export default class WinstonTransports {
    private static readonly _ACTIONS_FILE_NAME;
    private static readonly _ERRORS_FILE_NAME;
    private static readonly _ERROR_LEVEL;
    static console(options: ConfigConsoleInterface): ConsoleTransportInstance;
    static actions(options: ConfigFileInterface): FileTransportInstance;
    static errors(options: ConfigFileInterface): FileTransportInstance;
}
