import { XEUtilsMethods } from '../xe-utils'

/**
 * 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数
 * @param callback 回调
 * @param wait 毫秒
 * @param options 可选参数
 */
export declare function throttle(callback: Function, wait: number, options?: object): Function;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数
     * @param callback 回调
     * @param wait 毫秒
     * @param options 可选参数
     */
    throttle(callback: Function, wait: number, options?: object): Function;
  }
}

export default throttle