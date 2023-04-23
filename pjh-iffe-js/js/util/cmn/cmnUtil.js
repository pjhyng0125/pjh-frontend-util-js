export const myModule = (function () {
  const consts = {
    MALE: "M",
    FEMALE: "F",
  };

  // 외부에서 접근 가능한 객체 반환
  return {
    getConsts: (key) => {
      return consts[key];
    },
    /**
     * 남성 여부 반환
     * @param {string} gender
     * @returns {boolean}
     */
    isMale: (gender) => {
      return gender === myModule.getConsts("MALE");
    },
  };
})();
