<template>
  <div class="terms-container">
    <h2>약관 제목</h2>

    <div class="terms-content" v-for="(item, idx) in stplList" :key="idx">
      <div class="terms-check">
        <label :for="item.sId">{{ item.title }}</label>
        <input type="checkbox" :id="item.sId">
      </div>
      <template v-if="item.type === 'mndt'">
        <div class="terms-sub-section">
          <div class="terms-check" v-for="(subItem, idx) in item.subList" :key="idx">
            <label :for="subItem.sId">{{ subItem.subTitle }}</label>
            <input type="checkbox" :id="subItem.sId">
          </div>
        </div>
      </template>
      <template v-if="item.type === 'sclt'">
        <div class="terms-sub-section" v-for="(subItem, idx) in item.subList" :key="idx">
          <div class="terms-check" v-if="subItem.dsCd === '01'">
            <label :for="subItem.sId">{{ subItem.subTitle }}</label>
            <input type="checkbox" :id="subItem.sId">
          </div>
          <div class="terms-check" v-if="subItem.dsCd === '02'">
            <p>{{ subItem.subTitle }}</p>
            <div v-for="(advItem, idx) in subItem.advList" :key="idx">
              <label :for="advItem.sId">{{ advItem.advTitle }}</label>
              <input type="checkbox" :id="advItem.sId">
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="terms-content">
      <div class="terms-check">
        <label for="agree-checkbox">전체 동의 (선택동의 포함)</label>
        <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
      </div>
    </div>
    <div class="terms-content">
      <div class="terms-check">
        <label for="agree-checkbox">필수 약관 및 주요 안내사항</label>
        <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
      </div>
      <div class="terms-sub-section">
        <div class="terms-check">
          <label for="agree-checkbox">계약자 본인 실제 소유자 여부</label>
          <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
        </div>
        <div class="terms-check">
          <label for="agree-checkbox">계약자 본인 실제 소유자 여부 2</label>
          <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
        </div>
      </div>
    </div>
    <div class="terms-content">
      <div class="terms-check">
        <label for="agree-checkbox">선택 항목 전체동의</label>
        <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
      </div>
      <div class="terms-sub-section">
        <div class="terms-check">
          <label for="agree-radio">문자</label>
          <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
          <label for="disagree-radio">전화</label>
          <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
          <label for="disagree-radio">이메일</label>
          <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
        </div>
        <div class="terms-check">
          <label for="agree-checkbox">계약자 본인 실제 소유자 여부 2</label>
          <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
        </div>
        <div class="terms-check">
          <label for="agree-checkbox">계약자 본인 실제 소유자 여부 2</label>
          <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
        </div>
        <div class="terms-check">
          <label for="agree-checkbox">계약자 본인 실제 소유자 여부 2</label>
          <input type="checkbox" id="agree-checkbox" name="agree-checkbox">
        </div>
      </div>
    </div>
    <button type="submit" class="accept-button" disabled>동의</button>
  </div>
</template>

<script>
// import { validateUtil } from "../js/util/validate";
// import { typeUtil } from "../js/util/type";
// import { stringUtil } from "../js/util/string";
// import { sortUtil } from "../js/util/sort";
// import { arrayUtil } from "../js/util/array";

export default {
  name: 'StplTest',
  data() {
    return {
      stplList: [
        {
          title: '전체 동의 (선택동의 포함)',
          type: 'all',
          sId: 'STPL-ALL-MAIN',
        },       
        {
          title: '필수 약관 및 주요 안내사항',
          type: 'mndt',
          sId: 'STPL-MNDT-MAIN',
          subList: [
            {
              subTitle: '계약자 본인 실제 소유자 여부',
              sId: 'STPL-MNDT-SUB1',
            },
            {
              subTitle: '계약자 본인 실제 소유자 여부2',
              sId: 'STPL-MNDT-SUB2',
            },
            {
              subTitle: '계약자 본인 실제 소유자 여부3',
              sId: 'STPL-MNDT-SUB3',
            }
          ],
        },
        {
          title: '선택 항목 전체동의',
          type: 'sclt',
          sId: 'STPL-SCLT-MAIN',
          subList: [
            {
              subTitle: '선택 동의 1',
              sId: 'STPL-SCLT-SUB1',
              dsCd: '01',
            },
            {
              subTitle: '선택 동의 2',
              sId: 'STPL-SCLT-SUB2',
              dsCd: '01',
            },
            {
              subTitle: '광고성정보 수신 동의',
              sId: 'STPL-SCLT-SUB4',
              dsCd: '02',
              advList: [
                {
                  advTitle: '문자',
                  sId: 'STPL-SCLT-ADV-SUB1',
                },
                {
                  advTitle: '이메일',
                  sId: 'STPL-SCLT-ADV-SUB2',
                },
                {
                  advTitle: 'SMS',
                  sId: 'STPL-SCLT-ADV-SUB3',
                },
                {
                  advTitle: '전화',
                  sId: 'STPL-SCLT-ADV-SUB4',
                },
                {
                  advTitle: '방문',
                  sId: 'STPL-SCLT-ADV-SUB5',
                },
              ]
            },
          ],
        },
      ],
    }
  },
  mounted() {},
}
</script>

<style scoped>
.terms-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #e6e6e6;
  font-size: 16px;
}

.terms-container h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.terms-content {
  /* max-height: 300px; */
  overflow-y: auto;
  margin-bottom: 20px;
  border: 1px solid blue;
}

.accept-button {
  display: block;
  width: 100%;
  /* max-width: 200px; */
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.accept-button:hover {
  background-color: #0069d9;
}

form {
  margin-top: 20px;
}

form div {
  margin-bottom: 10px;
}

form label {
  margin-left: 10px;
}

form button:disabled {
  background-color: #999;
  cursor: not-allowed;
}

.terms-sub-section {
  border-bottom: 1px solid #999;
  border: 1px solid green;
  margin-top: 10px;
}

.terms-check {
  padding-bottom: 10px;
}
</style>
