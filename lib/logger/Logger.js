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
const WinstonTransports_1 = __importDefault(require("./winston/WinstonTransports"));
const WinstonDataWrapper_1 = __importDefault(require("./winston/WinstonDataWrapper"));
class Logger {
    constructor(config) {
        const options = {
            transports: [
                WinstonTransports_1.default.console(config.console),
                WinstonTransports_1.default.actions(config.file),
                WinstonTransports_1.default.errors(config.file)
            ]
        };
        this._logger = winston.createLogger(options);
    }
    info(message, data = undefined) {
        this._logger.info(message, WinstonDataWrapper_1.default.wrapData(data));
        return this;
    }
    debug(message, data = undefined) {
        this._logger.debug(message, WinstonDataWrapper_1.default.wrapData(data));
        return this;
    }
    error(message, error) {
        const data = {
            name: error.name,
            message: error.message,
            stack: error.stack
        };
        this._logger.error(message, WinstonDataWrapper_1.default.wrapData(data));
        return this;
    }
    finish(message) {
        return new Promise((resolve) => {
            this._logger.info(message, resolve);
        });
    }
}
exports.default = Logger;
