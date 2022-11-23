<template>
  <div class="container">
    <div class="row m-4">
      <div class="col-1"></div>
      <div class="col">
        <div class="row">
          <div class="col" id="title">{{ challenge.challengeName }}</div>
          <div class="col">
            <div v-if="joining"></div>
            <div>
              <input
                type="checkbox"
                class="btn-check"
                id="btn-check"
                autocomplete="off"
              />
              <label
                class="btn btn-primary"
                for="btn-check"
                @click="joinChallenge(challenge.challengeNo, loginUser.userNo)"
                >{{ this.btn }}</label
              >
            </div>
          </div>
        </div>
        <div class="row mt-2"></div>
        <div class="col" id="period">
          &nbsp;<i class="bi bi-calendar-check"></i> &nbsp; &nbsp;{{ startd }} -
          {{ endd }}
        </div>
      </div>
      <div class="row mt-4 ms-1">
        {{ challenge.challengeContent }}
      </div>
      <div class="row">
        <li
          class="col m-4"
          v-for="(mission, index) in indetailGetMissionList"
          :key="index"
        >
          - {{ mission.videoTitle }}
        </li>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "DetailChallenge",
  data() {
    return {
      btn: "참여하기",
    };
  },
  computed: {
    ...mapState([
      "challenges",
      "challenge",
      "indetailGetMissionList",
      "loginUser",
      "myjoinchallenges",
      "isJoin",
    ]),
    startd() {
      return moment(this.challenge.startDate).format("YY/MM/DD");
    },
    endd() {
      return moment(this.challenge.endDate).format("YY/MM/DD");
    },
  },
  created() {
    this.$store.dispatch("getDetailChallenge", this.$route.params.challengeNo);
    console.log(this.$route.params.challengeNo);
    //this.$store.dispatch(
    //  "inDetailGetMissionList",
    //  this.$route.params.challengeNo
    //)

  },

  // 못하겟다ㅜㅜ.. 헷갈려.,..
  methods: {
    joinChallenge(challengeNo, userNo) {
      //index.js에다가 유저 정보랑 챌린지 no 보내
      this.$store.dispatch("joinChallenge", {
        challengeNo,
        userNo,
      });
      if (this.btn == "참여중") {
        this.btn = "참여하기";
      } else {
        this.btn = "참여중";
      }
    },
    joining() {
      let result = (this.myjoinchallenges.filter((item) =>
        item.challengNo == this.$route.params.challegeNo
      ))
      if(result == true) {
        return true
      } else return false
    },
  },
};
</script>

<style>
#title {
  font-size: 30px;
  font-weight: bold;
}
</style>
