<template>
  <div class="result-container">
    <!-- {{challengeList}} -->
    <div class="row mt-4 ms-2" id="box">
      <form>
        <div class="row m-3">
          <input
            class="form-control"
            type="text"
            placeholder="챌린지 이름을 입력하세요."
            v-model="challengeName"
          />
        </div>
        <div class="row">
          <Datepicker range v-model="selectedDate" lang="en" />
        </div>

        <div class="row m-3">
          <label
            class="form-label"
            for="challengeContent"
            >어떤 챌린지인가요?</label
          >
          <textarea
            class="form-control"
            id="challengeContent"
            rows="3"
            v-model="challengeContent"
            placeholder="챌린지 설명을 적어주세요."
          ></textarea>
        </div>
        <!--<div class="row m-3">
          <label
            class="form-label"
            for="challengeContent"
            >포인트</label
          >
          <input
            class="form-control"
            type="text"
            placeholder="포인트를 입력해주세요"
            v-model="challengeName"
          />
        </div>-->
      </form>
      <div class="row me-5">
        <button class="btn btn-primary" @click="makeChallenge">만들기</button>
      </div>
      <!--<div class="row me-5">
        <button class="btn btn-primary" @click="makeMission">임시로 미션저장</button>
      </div>-->
    </div>
  </div>
</template>

<script>
import "vue-datepicker-ui/lib/vuedatepickerui.css";
import VueDatepickerUi from "vue-datepicker-ui";
import moment from "moment";
import { mapState } from "vuex";

export default {
  name: "RegistChallengeForm",
  components: {
    Datepicker: VueDatepickerUi,
  },
  data() {
    return {
      selectedDate: [
        new Date(),
        new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000),
      ],

      challengeName: "",
      challengeContent: "",
    };
  },
  computed: {
    ...mapState(["missions", "loginUser"]),
  },
  methods: {
    makeChallenge() {
      if (this.challengeName === "" || this.challengeContent === "") {
        alert("모든 내용을 입력해주세요.");
        return;
      }
      let startDate = moment(this.selectedDate[0]).format("YYMMDD");
      let endDate = moment(this.selectedDate[1]).format("YYMMDD");

      this.$store.dispatch("makeChallenge", {
        challengeName: this.challengeName,
        challengeContent: this.challengeContent,
        startDate,
        endDate,
        missions: this.missions,
        userNo: this.loginUser.userNo,
        
      });
    },
   // makeMission(){
   //   this.$store.dispatch("makeMission", {
    //    missions: this.missions,
                
    //  });
    //},
  },
};
</script>

<style scoped>
.result-container {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
}
</style>
