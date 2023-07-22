/**
 * 문자열 유틸리티 js
 */
export const stringUtil = {
  /**
   * 문자열을 구분자로 쪼개기
   * @param {string} s
   * @param {string} d
   * @returns {array}
   */
  splitByDelimiter: (s, d) => {
    return s.split(d);
  },

  /*
   * 다건 선택 문자열 반환
   * @param {string} chgBfStr	변경전 문자열
   * @param {string} updtDigit 갱신한 자릿수 (1부터 시작)
   * @param {boolean} isChecked checked 여부
   * @returns {string} multiScltStr 다건선택 문자열
   */
  getMuliScltStr: (chgBfStr, updtDigit, isChecked) => {
    let splitArr = chgBfStr.split("");
    splitArr[updtDigit - 1] = isChecked === true ? "1" : "0";

    const multiScltStr = splitArr.join("");
    return multiScltStr;
  },
};
