import ConfigConsoleInterface from './ConfigConsoleInterface'
import ConfigFileInterface from './ConfigFileInterface'

export default interface ConfigInterface {
    console: ConfigConsoleInterface,
    file: ConfigFileInterface
}