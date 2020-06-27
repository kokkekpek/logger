"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
const WinstonFormatPrettifyTimestamp_1 = __importDefault(require("./formats/WinstonFormatPrettifyTimestamp"));
const WinstonFormatLevelUpperCase_1 = __importDefault(require("./formats/WinstonFormatLevelUpperCase"));
const WinstonFormatGrayTimestamp_1 = __importDefault(require("./formats/WinstonFormatGrayTimestamp"));
const WinstonFormatConsolePrint_1 = __importDefault(require("./prints/WinstonFormatConsolePrint"));
const WinstonFormatErrorFilePrint_1 = __importDefault(require("./prints/WinstonFormatErrorFilePrint"));
class WinstonTransports {
    static console(options) {
        const consoleTransportFormat = winston.format.combine(WinstonFormatLevelUpperCase_1.default(), winston.format.colorize(), winston.format.timestamp(), WinstonFormatPrettifyTimestamp_1.default(), WinstonFormatGrayTimestamp_1.default(), WinstonFormatConsolePrint_1.default);
        return new winston.transports.Console({
            format: consoleTransportFormat,
            level: options.level,
            silent: !options.enabled
        });
    }
    static actions(options) {
        const fileTransportFormat = winston.format.combine(winston.format.timestamp(), winston.format.json());
        return new winston.transports.File({
            filename: `${options.directory}/${WinstonTransports._ACTIONS_FILE_NAME}`,
            maxsize: options.maxSize,
            format: fileTransportFormat,
            level: options.level,
            silent: !options.enabled
        });
    }
    static errors(options) {
        const fileTransportFormat = winston.format.combine(winston.format.timestamp(), WinstonFormatPrettifyTimestamp_1.default(), WinstonFormatErrorFilePrint_1.default);
        return new winston.transports.File({
            filename: `${options.directory}/${WinstonTransports._ERRORS_FILE_NAME}`,
            maxsize: options.maxSize,
            format: fileTransportFormat,
            level: WinstonTransports._ERROR_LEVEL,
            silent: !options.enabled
        });
    }
}
exports.default = WinstonTransports;
WinstonTransports._ACTIONS_FILE_NAME = 'actions.log';
WinstonTransports._ERRORS_FILE_NAME = 'errors.log';
WinstonTransports._ERROR_LEVEL = 'error';
