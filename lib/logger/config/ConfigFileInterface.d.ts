import ConfigConsoleInterface from './ConfigConsoleInterface';
export default interface ConfigFileInterface extends ConfigConsoleInterface {
    level: string;
    enabled: boolean;
    directory: string;
    maxSize: number;
}
