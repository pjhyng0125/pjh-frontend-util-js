/**
 * 포멧팅 유틸리티 js
 */
export const formatUtil = {
  /**
   * 커스텀 반올림 숫자 반환
   * @param {number} realNum 실수 (소수점 있는 숫자)
   * @param {number} baseFloatVal 기준 소수점 값
   * @returns {number} customRoundNum
   */
  getCustomRoundNum: (realNum, baseFloatVal) => {
    if (baseFloatVal <= 0 || baseFloatVal >= 1) {
      return realNum;
    }

    const intPart = Math.floor(realNum); // 정수 부분
    const floatPart = realNum - intPart; // 소수 부분

    if (floatPart >= baseFloatVal) {
      return intPart + 1;
    }

    return intPart;
  },
};
