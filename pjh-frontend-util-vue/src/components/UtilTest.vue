<template>
  <div>
    <table>
        <th>공통 js util</th>
        <th>호출 결과</th>
        <tr v-for="(item, idx) in UTIL_TEST_ARR" :key=idx>
            <td>{{ item.utilTxt + '.' + item.funcTxt }}</td>
            <td>{{ item.call() }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import { validateUtil } from "../js/util/validate";
import { typeUtil } from "../js/util/type";
import { stringUtil } from "../js/util/string";
import { sortUtil } from "../js/util/sort";
import { arrayUtil } from "../js/util/array";
import { formatUtil } from "../js/util/format";

export default {
  name: 'UtilTest',
  props: {},
  data() {
    return {
      UTIL_TEST_ARR: [
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isEmpty(true)',
          call: () => {
            return validateUtil.isEmpty(true);
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isEmpty(false)',
          call: () => {
            return validateUtil.isEmpty(false);
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isEmpty(undefined)',
          call: () => {
            return validateUtil.isEmpty(undefined);
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isEmpty(null)',
          call: () => {
            return validateUtil.isEmpty(null);
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isEmpty(0)',
          call: () => {
            return validateUtil.isEmpty(0);
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isEmpty(\'\')',
          call: () => {
            return validateUtil.isEmpty('');
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isEmpty(\'     \')',
          call: () => {
            return validateUtil.isEmpty('     ');
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isEmpty([])',
          call: () => {
            return validateUtil.isEmpty([]);
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isEmpty({})',
          call: () => {
            return validateUtil.isEmpty({});
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isNotEmpty([ 1,2,3 ])',
          call: () => {
            return validateUtil.isNotEmpty([ 1,2,3 ]);
          },
        },
        {
          utilTxt: 'validateUtil',
          funcTxt: 'isNotEmpty({ a:1, b:2 })',
          call: () => {
            return validateUtil.isNotEmpty({ a:1, b:2 });
          },
        },
        {
          utilTxt: 'typeUtil',
          funcTxt: 'isString(\'park\')',
          call: () => {
            return typeUtil.isString('park');
          },
        },
        {
          utilTxt: 'typeUtil',
          funcTxt: 'isNumber(30)',
          call: () => {
            return typeUtil.isNumber(30);
          },
        },
        {
          utilTxt: 'typeUtil',
          funcTxt: 'isBoolean(true)',
          call: () => {
            return typeUtil.isBoolean(true);
          },
        },
        {
          utilTxt: 'typeUtil',
          funcTxt: 'isObject({ a:1, b:2 })',
          call: () => {
            return typeUtil.isObject({ a:1, b:2 });
          },
        },
        {
          utilTxt: 'typeUtil',
          funcTxt: 'isFunction(Math.floor)',
          call: () => {
            return typeUtil.isFunction(Math.floor);
          },
        },
        {
          utilTxt: 'typeUtil',
          funcTxt: 'isUndefined()',
          call: () => {
            return typeUtil.isUndefined(undefined);
          },
        },
        {
          utilTxt: 'typeUtil',
          funcTxt: 'isNull()',
          call: () => {
            return typeUtil.isNull(null);
          },
        },
        {
          utilTxt: 'typeUtil',
          funcTxt: 'isArray([1, 2, 3])',
          call: () => {
            return typeUtil.isArray([1, 2, 3]);
          },
        },
        {
          utilTxt: 'stringUtil',
          funcTxt: 'splitByDelimiter(\'A, B, C\', \',\')',
          call: () => {
            return stringUtil.splitByDelimiter('A,B,C', ',');
          },
        },
        {
          utilTxt: 'sortUtil',
          funcTxt: 'sortKorean([다,나,하,나,가])',
          call: () => {
            return sortUtil.sortKorean(['다','나','하','나','가']);
          },
        },
        {
          utilTxt: 'arrayUtil',
          funcTxt: 'mergeArr([가,나,다], [하,호,허])',
          call: () => {
            return arrayUtil.mergeArr(['가', '나', '다'], ['하', '호', '허']);
          },
        },
        {
          utilTxt: 'formatUtil',
          funcTxt: 'formatUtil.getCustomRoundNum(7.7, 0.6)',
          call: () => {
            return formatUtil.getCustomRoundNum(7.7, 0.6);
          },
        },
        {
          utilTxt: 'formatUtil',
          funcTxt: 'formatUtil.getCustomRoundNum(7.5, 0.6)',
          call: () => {
            return formatUtil.getCustomRoundNum(7.5, 0.6);
          },
        },
        {
          utilTxt: 'formatUtil',
          funcTxt: 'formatUtil.getCustomRoundNum(7.5, 0)',
          call: () => {
            return formatUtil.getCustomRoundNum(7.5, 0);
          },
        },
        {
          utilTxt: 'formatUtil',
          funcTxt: 'formatUtil.getCustomRoundNum(7.5, 1.1)',
          call: () => {
            return formatUtil.getCustomRoundNum(7.5, 1.1);
          },
        },
        {
          utilTxt: 'stringUtil',
          funcTxt: 'stringUtil.getMuliScltStr(100000, 4, true)',
          call: () => {
            return stringUtil.getMuliScltStr('000000', 4, true);
          },
        },
      ],
      oddArr: [],
      evenArr: [],
    }
  },
  mounted() {
    console.log('[mounted] call!');

    let arr = [1,2,3,4,5,8,9];
    arr.forEach((item, idx) => {
      console.log(`${item}, ${idx}`);
      if (item % 2 === 0) {
        this.evenArr.push(item);
      } else {
        this.oddArr.push(item);
      }
    });
  },
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    /* border: 1px solid; */
}

th {
    background-color: #04AA6D;
    color: white;
}

th, td {
    padding: 15px;
    funcTxt-align: left;
}

tr:hover {background-color: beige;}

/* tr:nth-child(odd) {background-color: #f2f2f2;} */
</style>
