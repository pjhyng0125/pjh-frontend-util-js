export const validateUtil = {
  isEmpty: (val) => {
    if (
      val === undefined ||
      val === null ||
      (typeof val === "string" && val.trim() === "") ||
      (Array.isArray(val) && val.length === 0) ||
      (typeof val === "object" && Object.keys(val).length === 0)
    ) {
      return true;
    } else {
      return false;
    }
  },
  isNotEmpty: (val) => {
    return !validateUtil.isEmpty(val);
  },
};
