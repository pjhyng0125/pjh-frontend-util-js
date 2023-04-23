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

export default {
  name: 'UtilTest',
  props: {
    msg: String
  },
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
      ],
    }
  },
  mounted() {
    console.log('[mounted] call!');
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
