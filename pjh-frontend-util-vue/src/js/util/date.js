/**
 * 날짜 유틸리티 js
 */
export const dateUtil = {
  /**
   * format Date 객체 반환
   * @param {string} dt 일자 YYYYMMDD
   * @param {string} s 구분자 separator
   * @returns {string} YYYY.MM.DD
   */
  toFrmtDate: (dt, s) => {
    if (!dt || dt.length != 8) {
      return;
    }

    if (!s) {
      return dt;
    }

    const y = dt.substring(0, 4);
    const m = dt.substring(4, 6);
    const d = dt.substring(6, 8);

    return y + s + m + s + d;
  },
  /**
   * Date 객체 반환
   * @param {string} dt 일자 YYYYMMDD
   * @returns {Date} Fri Nov 17 2023 15:10:11 GMT+0900 (한국 표준시)
   */
  getDateObj: (dt) => {
    if (!dt || dt.length < 8) {
      return new Date();
    }

    return new Date(dateUtil.toFrmtDate(dt, "."));
  },
  /**
   * 요일 문자열 반환
   * @param {string} dt 일자 YYYYMMDD
   * @returns {string} 요일 ex) '일'
   */
  getDtwkStr: (dt) => {
    const dtwks = ["일", "월", "화", "수", "목", "금", "토"];
    var dateObj = dateUtil.getDateObj(dt);
    return dtwks[dateObj.getDay()];
  },
  /**
   * 포멧 일자 문자열 반환
   * @param {string} dt 일자 YYYYMMDD
   * @param {object} paramObj {monthShowYn:Y}
   * @returns {string} MM월 DD일 (EEE) or DD일 (EEE)
   */
  getFrmtDtStr: (dt, paramObj) => {
    if (!dt || dt.length < 8) {
      return new Date();
    }

    // default 설정 (monthShowYn:Y)
    const monthShowYn = (paramObj && paramObj.monthShowYn) || "Y";

    const mm = Number(dt.slice(4, 6)) || "";
    const dd = Number(dt.slice(6, 8)) || "";
    const dtwk = dateUtil.getDtwkStr(dt);

    const frmtDtStr = dd + "일 (" + dtwk + ")";
    return monthShowYn === "Y" ? mm + "월 " + frmtDtStr : frmtDtStr;
  },
};
