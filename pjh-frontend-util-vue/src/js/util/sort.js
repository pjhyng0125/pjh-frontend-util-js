/**
 * 정렬 유틸리티 js
 */
export const sortUtil = {
  /**
   * 가나다 순 정렬
   * @param {string} s
   * @returns {array}
   */
  sortKorean: (s) => {
    return s.sort((value, target) => {
      return value.localeCompare(target, "ko-KR");
    });
  },
};
