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
         <Datepicker class="my-v-calendar" range v-model="selectedDate" lang="en"/>
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
  import 'vue-datepicker-ui/lib/vuedatepickerui.css';
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

.my-v-calendar {
  --v-calendar-input-font-size: 0.5rem;
  --v-calendar-day-width: 25px;
  }
</style>
