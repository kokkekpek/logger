"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmptyLogger {
    info(message, data = undefined) {
        return this;
    }
    debug(message, data = undefined) {
        return this;
    }
    error(message, error) {
        return this;
    }
    finish() {
        return new Promise((resolve) => {
            resolve();
        });
    }
}
exports.default = EmptyLogger;
