"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WinstonDataWrapper {
    /**
     * @param data {Object | undefined} Example:
     *     {
     *         host: '127.0.0.1',
     *         port: 6379
     *     }
     * @return {Object | undefined} Example:
     *     {
     *         data: {
     *             host: '127.0.0.1',
     *             port: 6379
     *         }
     *     }
     */
    static wrapData(data) {
        if (!data)
            return undefined;
        const result = {};
        result[WinstonDataWrapper.DATA] = data;
        return result;
    }
    /**
     * @param data {Object} Example:
     *     {
     *         data: {
     *             host: '127.0.0.1',
     *             port: 6379
     *         }
     *     }
     * @return {Object | undefined} Example:
     *     {
     *         host: '127.0.0.1',
     *         port: 6379
     *     }
     */
    static unwrapData(data) {
        if (!data.hasOwnProperty(WinstonDataWrapper.DATA))
            return undefined;
        return data[WinstonDataWrapper.DATA];
    }
}
exports.default = WinstonDataWrapper;
WinstonDataWrapper.DATA = 'data';
