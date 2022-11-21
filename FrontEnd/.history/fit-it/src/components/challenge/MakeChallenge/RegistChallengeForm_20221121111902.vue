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
        <div class="row m-3" id="wrapper">
         <ejs-daterangepicker id="daterangepicker" :placeholder="waterMarkText"></ejs-daterangepicker>
        </div>
        
          <input type="text" id="demo" name="demo" value="" />
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
import Vue from "vue";
import { DateRangePickerPlugin } from "@syncfusion/ej2-vue-calendars";
Vue.use(DateRangePickerPlugin);

export default Vue.extend({
  name: "RegistChallengeForm",
  data: function() {
    return {
      waterMarkText: "Select a Range"
    };
  },
  methods: {
    makeChallenge() {

    },
    demo() {

    },
  },
});
</script>

<style scoped>
.result-container {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
}

#wrapper {
  max-width: 246px;
  margin: 30px auto;
  padding-top: 15px;
}
</style>
