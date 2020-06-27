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
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
const TIMESTAMP_LENGTH = 19;
const TIMESTAMP_OLD_SEPARATOR = 'T';
const TIMESTAMP_NEW_SEPARATOR = ' ';
/**
 * Original info.timestamp:
 *     '2020-10-10T10:10:10.111Z'
 * New info.timestamp:
 *     '2020-10-10 10:10:10'
 */
function prettifyTimestamp(info) {
    if (info.timestamp)
        info.timestamp = info.timestamp
            .slice(0, TIMESTAMP_LENGTH)
            .replace(TIMESTAMP_OLD_SEPARATOR, TIMESTAMP_NEW_SEPARATOR);
    return info;
}
exports.default = winston.format(prettifyTimestamp);
