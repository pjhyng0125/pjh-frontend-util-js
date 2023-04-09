// var calculator = calculator || {};

// 1. sample source
// (function () {
//   function sum(a, b) {
//     return a + b;
//   }

//   calculator.sum = sum;
// })();

// console.log(calculator.sum(2, 4));

// 2. sample source
// let globalVar;

// (function init() {
//   const localVar = "local scope";
//   globalVar = "global scope";
// })();

// console.log(`globalVar : ${globalVar}`);
// console.log(`localVar : ${localVar}`);

// 3. sample source
let SaladUtils = SaladUtils || {};

SaladUtils = (function () {
  // 샐러드구분코드 상수 선언
  const SALAD_DS_CD = {
    CHICKEN: "0001",
    PORK: "0002",
    BEAN: "0003",
    CHEESE: "0004",
  };

  return {
    /**
     * 샐러드 상품 유틸리티 js
     */
    product: {
      /**
       * 샐러드구분코드반환
       * @param {string} saladDsStr 샐러드구분문자열
       */
      getSaladDsCd: function (saladDsStr) {
        return SALAD_DS_CD[saladDsStr];
      },
    },
  };
})();

const SaladPdUtils = SaladUtils.product;

console.log(SaladPdUtils.getSaladDsCd("CHICKEN"));
console.log(SaladPdUtils.getSaladDsCd("PORK"));
console.log(SaladPdUtils.getSaladDsCd("BEAN"));
console.log(SaladPdUtils.getSaladDsCd("CHEESE"));
console.log(SaladPdUtils.getSaladDsCd("NULL"));
