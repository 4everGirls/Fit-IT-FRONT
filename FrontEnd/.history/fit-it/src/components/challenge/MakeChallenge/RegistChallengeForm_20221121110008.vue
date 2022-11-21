<template>
  <div class="result-container">
    <div class="row mt-4 ms-2" id="box">
      <form>
        <div class="row m-3">
          <input
            class="form-control"
            type="text"
            placeholder="챌린지 이름을 입력하세요."
          />
        </div>
        <div class="row m-3">날짜 선택</div>
        <div>
          <el-date-picker 
                v-model="startDate" 
                type="week" 
                placeholder="시작일" 
                value-format="yyyyMMdd" 
                @change="changeDate('start')" 
                :picker-options="startDateOptions" 
          ></el-date-picker>
          </div>
          <div>
          <el-date-picker 
                  v-model="endDate" 
                  type="week" 
                  placeholder="종료일" 
                  value-format="yyyyMMdd" 
                  @change="changeDate('end')" 
                  :picker-options="endDateOptions" 
                ></el-date-picker>
          </div>-
          
        <div class="row m-3">선택된 날짜 보여주는곳</div>
        <div class="row m-3">챌린지 내용 텍스트 에이리이아</div>
        <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">어떤 챌린지인가요?</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      </form>
      <div class="row me-5">
        <button class="btn btn-primary" @click="makeChallenge">만들기</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import elDatePicker from 'vue-el-datepicker'

export default {
  name: "RegistChallengeForm",
  components:{
    elDatePicker
  },
  data() { 
    return { 
      startDate: '', 
      endDate: '',
      startDateOptions: { 
        disabledDate: this.disabledStDate 
      }, 
      endDateOptions: { 
        disabledDate: this.disabledEdDate 
      },
    } 
},
  methods: {
    makeChallenge() {},
    disabledStDate(date) { 
      date = moment(String(date)).format('YYYYMMDD') 
    return date > moment().format('YYYYMMDD') || date < moment().add(-1, 'years').format('YYYYMMDD') 
    },
    disabledEdDate(date) { 
      date = moment(String(date)).format('YYYYMMDD') 
      return date > moment().format('YYYYMMDD') || date < this.searchData.startDate 
    }, 
    changeDate(type) { 
      if (type === 'start') { 
       if (this.endDate === null || this.startDate > this.endDate) { 
         this.endDate = this.startDate 
        } 
       if (moment(this.startDate).isBefore(moment(this.endDate).subtract(1, 'months').format('YYYYMMDD'))) { 
          alert('검색 기간은 최대 1개월까지 선택 가능 합니다.') 
        this.startDate = moment(this.endDate).subtract(1, 'months').format('YYYYMMDD') 
        } 
      } else if (type === 'end') { 
       if (this.startDate === null) { 
         this.startDate = this.endDate 
        } 
      if (moment(this.endDate).isAfter(moment(this.startDate).add(1, 'months').format('YYYYMMDD'))) { 
          alert('검색 기간은 최대 1개월까지 선택 가능 합니다.') 
         this.endDate = moment(this.startDate).add(1, 'months').format('YYYYMMDD') 
        } 
      } 
  },
    
  },
};
</script>

<style scoped>
.result-container {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
}
</style>
