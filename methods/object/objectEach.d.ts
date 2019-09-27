import { XEUtilsMethods } from '../xe-utils'

/**
 * 对象迭代器
 * @param obj 对象
 * @param iteratee 回调 
 * @param context 上下文
 */
export declare function objectEach(obj: any, iteratee: Function, context ?: any): void;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 对象迭代器
     * @param obj 对象
     * @param iteratee 回调 
     * @param context 上下文
     */
    objectEach(obj: any, iteratee: Function, context ?: any): void;
  }
}

export default objectEach