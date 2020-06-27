import ObjectInterface from '../data/ObjectInterface';
export default class WinstonDataWrapper {
    static readonly DATA: string;
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
    static wrapData(data: ObjectInterface | undefined): Object | undefined;
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
    static unwrapData(data: ObjectInterface): ObjectInterface | undefined;
}
