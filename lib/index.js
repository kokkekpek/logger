"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyLogger = exports.default = void 0;
const Logger_1 = __importDefault(require("./logger/Logger"));
exports.default = Logger_1.default;
const EmptyLogger_1 = __importDefault(require("./logger/EmptyLogger"));
exports.EmptyLogger = EmptyLogger_1.default;
