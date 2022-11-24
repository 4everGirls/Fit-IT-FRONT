<template>
  <div class="result-container">
    <div class="row" id="box">
      <form>
        <div class="row m-3">
          <input
            class="form-control"
            type="text"
            placeholder="챌린지 이름을 입력하세요."
            v-model="challengeName"
          />
        </div>
        <div class="row calneder">
          <Datepicker range v-model="selectedDate" lang="en" />
        </div>

        <div class="row m-3">
          <label class="form-label" for="challengeContent"
            >어떤 챌린지인가요?</label
          >
          <textarea
            class="form-control"
            id="challengeContent"
            rows="15"
            v-model="challengeContent"
            placeholder="챌린지 설명을 적어주세요."
          ></textarea>
        </div>
      </form>
      <div class="row me-5">
        <button class="btn btn-primary" @click="makeChallenge">만들기</button>
      </div>
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

      //this.$store.dispatch("makeChallenge", {
      //  challengeName: this.challengeName,
      //  challengeContent: this.challengeContent,
      //  startDate,
      // endDate,
      //  missions: this.missions,
      //  userNo: this.loginUser.userNo,
      //
      //});

      this.$store
        .dispatch("makeChallengePromise", {
          challengeName: this.challengeName,
          challengeContent: this.challengeContent,
          startDate,
          endDate,
          userNo: this.loginUser.userNo,
        })
        .then((data) => {
          return this.$store.dispatch("makeMissionPromise", {
            challengeNo: data,
            missions: this.missions,
          });
        })
        .then(() => {
          console.log("등록이 완료되었습니다.");
        });
    },
  },
};
</script>

<style scoped>
.result-container {
  background-color: white;
  border-radius: 13px;
  height: 80%;
}
.calneder {
  margin: 6px;
}
#box {
  padding: 10px;
  margin: auto;
  display: block;
  width: 83%;
}
.btn {
  margin: 0 auto;
  width: 100px;
}
form {
  padding: 10px 0 10px 0;
}
.form-label {
  font-size: 20px;
}
</style>
