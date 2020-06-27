export default class WinstonDataWrapper {
    public static readonly DATA: string = 'data'

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
    public static wrapData(data: Object | undefined): Object | undefined {
        if (!data) return undefined
        const result: Object = {}
        result[WinstonDataWrapper.DATA] = data
        return result
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
    public static unwrapData(data: Object): Object | undefined {
        if (!data.hasOwnProperty(WinstonDataWrapper.DATA)) return undefined
        return data[WinstonDataWrapper.DATA]
    }
}