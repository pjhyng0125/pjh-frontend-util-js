/**
 * 정렬 유틸리티 js
 */
export const sortUtil = {
  /**
   * 가나다 순 정렬
   * @param {array} arr
   * @returns {array}
   */
  sortKorean: (arr) => {
    return arr.sort((value, target) => {
      return value.localeCompare(target, "ko-KR");
    });
  },
};
