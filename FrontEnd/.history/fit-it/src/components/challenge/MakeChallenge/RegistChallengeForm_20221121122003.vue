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
        <div class="row" >
         <Datepicker range v-model="selectedDate" lang="en"/>
        </div>
        
         
        <div class="row m-3">
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
//  import 'vue-datepicker-ui/lib/vuedatepickerui.css';
  import VueDatepickerUi from 'vue-datepicker-ui';

export default{
  name: "RegistChallengeForm",
  components: {
      Datepicker: VueDatepickerUi
  },
  data () {
    return {
      selectedDate: [
        new Date(),
        new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000)]
    }
  },
  methods: {
    makeChallenge() {

    },
    
  },
};
</script>

<style scoped>
.result-container {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
}

.v-calendar {
 --v-calendar-picker-color: #1b1e23;
  --v-calendar-input-bg-color:#1b1e23;
  --v-calendar-select-bg-color: #1b1e23;
  --v-calendar-border-color: #323B43;
  --v-calendar-triangle-color: #1b1e23;
  --v-calendar-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
  --v-calendar-top-shadow: 3px -14px 30px 0px rgba(0, 0, 0, 0.2);
  --v-calendar-text-color:#b8b8b9;
  --v-calendar-action-color: #b8b8b9;
  --v-calendar-text-disabled-color: #b8b8b97c;
  --v-calendar-view-button-color:#b8b8b9;
  --v-calendar-datepicker-icon-color: #b8b8b9;
  --v-calendar-datepicker-icon-size: 1.1rem;
  --v-calendar-active-bg-color: #f7cd00;
  --v-calendar-active-text-color:#323B43;
  --v-calendar-range-bg-color: #282c34;
  --v-calendar-view-button-font-weight: 00;
  --v-calendar-view-button-font-size: 1.1rem;
  --v-calendar-range-text-color: #ddd;
  --v-calendar-range-radius: 100%;
  --v-calendar-day-hover-bg-color:#323B43;
  --v-calendar-day-width: 45px;
  --v-calendar-day-height: 45px;
  --v-calendar-day-font-size: 0.8rem;
  --v-calendar-day-font-weight: 500;
  --v-calendar-input-border: 1px solid #383e48;
  --v-calendar-input-text-color: #323B43;
  --v-calendar-input-font-size: 0.9rem;
  --v-calendar-input-font-weight: 500;
  --v-calendar-content-radius: 6px;
  --v-calendar-day-name-font-size: 0.9rem;
  --v-calendar-day-name-font-weight: 600;
  --v-calendar-day-name-color:#323B43;
  --v-calendar-year-font-size: 1.1rem;
  --v-calendar-year-color: #b8b8b9;
  --v-calendar-year-font-weight: 500;
  --v-calendar-input-bg-disable-color:rgb(245, 245, 245);
  --v-calendar-input-text-disable-color:#b8b8b9;
  --v-calendar-year-disabled-color: #b8b8b9;
  --v-calendar-year-disabled-bg-color: transparent;
  --v-calendar-year-padding: 10px;
  --v-calendar-year-border: none;
  --v-calendar-year-border-radius: none;
  --v-calendar-month-font-size: 1.1rem;
  --v-calendar-month-color: #b8b8b9;
  --v-calendar-month-font-weight: 500;
  --v-calendar-month-disabled-color: #b8b8b9;
  --v-calendar-month-disabled-bg-color: transparent;
  --v-calendar-month-padding: 8px;
  --v-calendar-month-border: none;
  --v-calendar-month-border-radius: none;
  }
</style>
