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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
const util = __importStar(require("util"));
const WinstonDataWrapper_1 = __importDefault(require("../WinstonDataWrapper"));
function print(info) {
    const { timestamp, level, message } = info, args = __rest(info, ["timestamp", "level", "message"]);
    const data = formatData(args);
    return `${timestamp} [${level}]: ${message} ${data}`;
}
/**
 * Remove Symbol fields from object and colorize
 * @param args {Object} Example:
 *     {
 *         data: {
 *             'token': 'XXX',
 *             'settings': { webHook: { port: 3000, autoOpen: false } }
 *         }
 *         [Symbol(level)]: 'debug',
 *         [Symbol(splat)]: [ [ 'XXX', [Object] ] ],
 *         [Symbol(message)]: '{'data':{'token':'XXX','settings':{'webHook':{'port':3000,'autoOpen':false}},'level':'debug','message':'CREATE TELEGRAM BOT'}}'
 *     }
 * @return {string} Example:
 *     {
 *         'token': 'XXX',
 *         'settings': { webHook: { port: 3000, autoOpen: false } }
 *     }
 */
function formatData(args) {
    if (!Object.keys(args).length)
        return '';
    const data = WinstonDataWrapper_1.default.unwrapData(args);
    if (!data)
        return '';
    const result = {};
    for (let key in data)
        result[key] = data[key];
    return util.inspect(result, { colors: true, depth: null });
}
exports.default = winston.format.printf(print);
