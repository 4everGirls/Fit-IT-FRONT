<template>
  <div class="result-container">
    <div class="row mt-4 ms-2" id="box">
      <form>
        <div class="row m-3">
          <input
            class="form-control"
            type="text"
            placeholder="챌린지 이름을 입력하세요."
            v-model="challege"
          />
        </div>
        <div class="row">
          <Datepicker range v-model="selectedDate" lang="en" />
        </div>

        <div class="row m-3">
          <label class="form-label" for="challengeContent"
            >어떤 챌린지인가요?</label
          >
          <textarea
            class="form-control"
            id="challengeContent"
            rows="3"
            v-model="challengeContent"
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
    };
  },
  methods: {
    makeChallenge() {},
    // addChallenge(videoId, videoTitle, channelName, videoThumbnail) {
    //   if (this.missionList.length <= 10) {
    //     this.$store.dispatch("getVideoList", {
    //       videoId,
    //       videoTitle,
    //       channelName,
    //       videoThumbnail
    //     });
    //   } else {
    //     alert("더이상 추가 할 수 없습니다.")
    //   }
    // },
  },
};
</script>

<style scoped>
.result-container {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
}
</style>
