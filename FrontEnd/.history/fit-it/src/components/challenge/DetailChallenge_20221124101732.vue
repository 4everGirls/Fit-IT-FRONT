<template>
  <div class="container">
    <div class="row m-4">
      <div class="col-1"></div>
      <div class="col">
        <div class="row">
          <div class="col" id="title">{{ challenge.challengeName }}</div>
          <div class="col">
            <div v-if="isJoin === 0">
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
                  @click="
                    joinChallenge(challenge.challengeNo, loginUser.userNo)
                  "
                  >참여하기</label
                >
              </div>
            </div>
            <div v-else>
              <div>
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btn-check"
                  autocomplete="off"
                />
                <label
                  class="btn btn-danger"
                  for="btn-check"
                  @click="
                    notJoinChallenge(challenge.challengeNo, loginUser.userNo)
                  "
                  >참여취소</label
                >
              </div>
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
        {{ challenge.missions }}
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
    return {};
  },
  computed: {
    ...mapState(["challenge", "indetailGetMissionList", "loginUser", "isJoin"]),
    startd() {
      return moment(this.challenge.startDate).format("YY/MM/DD");
    },
    endd() {
      return moment(this.challenge.endDate).format("YY/MM/DD");
    },
  },
  created() {
    console.log(this.$route.params.challengeNo);
    this.$store.dispatch("getDetailChallenge", this.$route.params.challengeNo);

    this.$store.dispatch("isJoinOrNotLetCheck", {
      challenge: this.challenge,
      challengeNo: this.$route.params.challengeNo,
      userNo: this.loginUser.userNo,
    });

    this.$store.dispatch("inDetailGetMissionList", {
      challenge: this.challenge,
      challengeNo: this.$route.params.challengeNo,
      userNo: this.loginUser.userNo,
    });


    

  },

  
  methods: {
    joinChallenge(challengeNo, userNo) {
      //index.js에다가 유저 정보랑 챌린지 no 보내
      this.$store.dispatch("joinChallenge", {
        challengeNo,
        userNo,
      });
    },
    notJoinChallenge(challengeNo, userNo) {
      this.$store.dispatch("notJoinChallenge", {
        challengeNo,
        userNo,
      });
    },
  },
};
</script>

<style>
#title {
  font-size: 30px;
  color: indigo;
  font-weight: 800;
}
.btn {
  margin: 20px;
}
</style>
