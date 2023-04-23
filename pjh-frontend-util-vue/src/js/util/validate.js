export const validateUtil = {
  /**
   * empty 여부 반환
   * @param {*} val
   * @returns
   */
  isEmpty: (val) => {
    if (
      val === undefined ||
      val === null ||
      (typeof val === "string" && val.trim() === "") ||
      (Array.isArray(val) && val.length === 0) ||
      (typeof val === "object" && Object.keys(val).length === 0)
    ) {
      return true;
    }
    return false;
  },
  /**
   * not empty 여부 반환
   * @param {*} val
   * @returns
   */
  isNotEmpty: (val) => {
    return !validateUtil.isEmpty(val);
  },
};
