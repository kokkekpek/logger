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
const WinstonDataWrapper_1 = __importDefault(require("../WinstonDataWrapper"));
function print(info) {
    const { timestamp, level, message } = info, args = __rest(info, ["timestamp", "level", "message"]);
    const data = formatData(args);
    return `${timestamp} [${level}]: ${message} ${data}`;
}
/**
 * Remove symbols from object and colorize
 * @param args {Object} Example:
 *     {
 *         data: {
 *             name: 'ReplyError',
 *             message: 'ERR invalid password',
 *             stack: 'ReplyError: ERR invalid password\n' +
 *             '    at parseError (/srv/www/casino/casino/telegram-bot/node_modules/redis-parser/lib/parser.js:193:12)\n' +
 *             '    at parseType (/srv/www/casino/casino/telegram-bot/node_modules/redis-parser/lib/parser.js:303:14)'
 *         },
 *         [Symbol(level)]: 'error',
 *         [Symbol(splat)]: [ { data: [Object] } ],
 *         [Symbol(message)]: '{'data':{'name':'ReplyError'...
 *     }
 * @return {string} Example:
 *     'ReplyError. ERR invalid password. ReplyError: ERR invalid password\n' +
 *     '    at parseError (/srv/www/casino/casino/telegram-bot/node_modules/redis-parser/lib/parser.js:193:12)\n' +
 *     '    at parseType (/srv/www/casino/casino/telegram-bot/node_modules/redis-parser/lib/parser.js:303:14)'
 */
function formatData(args) {
    if (!Object.keys(args).length)
        return '';
    const data = WinstonDataWrapper_1.default.unwrapData(args);
    if (!data)
        return '';
    return `${data.name}. ${data.message}. ${data.stack}.`;
}
exports.default = winston.format.printf(print);
