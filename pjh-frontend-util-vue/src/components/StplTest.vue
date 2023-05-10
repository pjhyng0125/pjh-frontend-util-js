<template>
  <div class="terms-container">
    <h2>약관 제목</h2>

    <div class="terms-content" v-for="(item, idx) in stplList" :key="idx">
      <div class="terms-check">
        <label :for="item.sId">{{ item.title }}</label>
        <input type="checkbox" :id="item.sId" v-model="item.checked">
      </div>
      <template v-if="item.type === 'mndt'">
        <div class="terms-sub-section">
          <div class="terms-check" v-for="(subItem, idx) in item.subList" :key="idx">
            <label :for="subItem.sId">{{ subItem.subTitle }}</label>
            <input type="checkbox" :id="subItem.sId" v-model="subItem.checked">
          </div>
        </div>
      </template>
      <template v-if="item.type === 'sclt'">
        <div class="terms-sub-section" v-for="(subItem, idx) in item.subList" :key="idx">
          <div class="terms-check" v-if="subItem.dsCd === '01'">
            <label :for="subItem.sId">{{ subItem.subTitle }}</label>
            <input type="checkbox" :id="subItem.sId" v-model="subItem.checked">
          </div>
          <div class="terms-check" v-if="subItem.dsCd === '02'">
            <p>{{ subItem.subTitle }}</p>
            <div v-for="(advItem, idx) in subItem.advList" :key="idx">
              <label :for="advItem.sId">{{ advItem.advTitle }}</label>
              <input type="checkbox" :id="advItem.sId" v-model="advItem.checked">
            </div>
          </div>
        </div>
      </template>
    </div>
    <button type="submit" class="accept-button" @click="getStplCheckedRstList">동의</button>
  </div>
</template>

<script>

export default {
  name: 'StplTest',
  data() {
    return {
      stplList: [
        {
          title: '전체 동의 (선택동의 포함)',
          type: 'all',
          sId: 'STPL_ALL_MAIN',
          checked: false,
        },       
        {
          title: '필수 약관 및 주요 안내사항',
          type: 'mndt',
          sId: 'STPL_MNDT_MAIN',
          checked: false,
          subList: [
            {
              subTitle: '계약자 본인 실제 소유자 여부',
              sId: 'STPL_MNDT_SUB1',
              checked: false,
            },
            {
              subTitle: '계약자 본인 실제 소유자 여부2',
              sId: 'STPL_MNDT_SUB2',
              checked: false,
            },
            {
              subTitle: '계약자 본인 실제 소유자 여부3',
              sId: 'STPL_MNDT_SUB3',
              checked: false,
            }
          ],
        },
        {
          title: '선택 항목 전체동의',
          type: 'sclt',
          sId: 'STPL_SCLT_MAIN',
          checked: false,
          subList: [
            {
              subTitle: '선택 동의 1',
              sId: 'STPL_SCLT_SUB1',
              dsCd: '01',
              checked: false,
            },
            {
              subTitle: '선택 동의 2',
              sId: 'STPL_SCLT_SUB2',
              dsCd: '01',
              checked: false,
            },
            {
              subTitle: '광고성정보 수신 동의',
              sId: 'STPL_SCLT_SUB4',
              dsCd: '02',
              advList: [
                {
                  advTitle: '문자',
                  sId: 'STPL_SCLT_ADV_SUB1',
                  checked: false,
                },
                {
                  advTitle: '이메일',
                  sId: 'STPL_SCLT_ADV_SUB2',
                  checked: false,
                },
                {
                  advTitle: 'SMS',
                  sId: 'STPL_SCLT_ADV_SUB3',
                  checked: false,
                },
                {
                  advTitle: '전화',
                  sId: 'STPL_SCLT_ADV_SUB4',
                  checked: false,
                },
                {
                  advTitle: '방문',
                  sId: 'STPL_SCLT_ADV_SUB5',
                  checked: false,
                },
              ]
            },
          ],
        },
      ],
    }
  },
  mounted() {
    console.log(`[mounted] stplList : ${this.stplList}`);

    // const flrgArr = this.stplList.map((item) => {
    //   console.log(`[mounted] item : ${JSON.stringify(item)}`);
    //   const isChecked = $("#" + item.sId).checked;
    //   const stplId = item.sId;
    //   return item.type === 'all' ? { stplId : isChecked} : {};
    // });

    // console.log(`[mounted] flrgArr : ${flrgArr}`);
  },
  methods : {
    /**
     * checked 리스트 반환
     * @param {array} arr 
     * @returns {object} { sId: checked }
     */
    getCheckedList(arr) {
      let rst = {};
      arr.forEach(ele => {
        rst[ele.sId] = ele.checked;
      });
      // console.log(`[getCheckedList] rst : ${JSON.stringify(rst)}`);
      return rst;
    },
    /**
     * 약관 checked 결과 리스트 반환
     */
    getStplCheckedRstList() {
      let rst = {};
      this.stplList.forEach(ele => {
        rst[ele.sId] = ele.checked;

        if (ele.subList) {
          ele.subList.forEach(sub => {
            rst[sub.sId] = sub.checked;
            
            if (sub.advList) {
              rst = {...rst, ...this.getCheckedList(sub.advList)};
            }
          });
        }
      });
      console.log(`[getStplCheckedRstList] rst : ${JSON.stringify(rst)}`);
    },
  },
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
