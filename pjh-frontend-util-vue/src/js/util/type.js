/**
 * 타입 유틸리티 js
 */
export const typeUtil = {
  /**
   * string 여부 반화
   * @param {string} v
   * @returns
   */
  isString: (v) => {
    return typeof v === "string" || v instanceof String;
  },
  /**
   * nubmer 여부 반화
   * @param {number} v
   * @returns
   */
  isNumber: (v) => {
    return typeof v === "number" && isFinite(v);
  },
  /**
   * boolean 여부 반화
   * @param {boolean} v
   * @returns
   */
  isBoolean: (v) => {
    return typeof v === "boolean";
  },
  /**
   * object 여부 반화
   * @param {object} v
   * @returns
   */
  isObject: (v) => {
    return typeof v === "object" && v !== null;
  },
  /**
   * function 여부 반화
   * @param {function} v
   * @returns
   */
  isFunction: (v) => {
    return typeof v === "function";
  },
  /**
   * undefined 여부 반화
   * @param {undefined} v
   * @returns
   */
  isUndefined: (v) => {
    return typeof v === "undefined";
  },
  /**
   * null 여부 반화
   * @param {object} v
   * @returns
   */
  isNull: (v) => {
    return v === null;
  },
  /**
   * array 여부 반화
   * @param {object} v
   * @returns
   */
  isArray: (v) => {
    return Array.isArray(v);
  },
};
