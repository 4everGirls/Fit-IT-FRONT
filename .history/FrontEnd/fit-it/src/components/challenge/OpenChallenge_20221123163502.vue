<template>
  <div>
    <div class="row">
      <div class="col"><h1 class="title">오픈된 챌린지</h1></div>
      <div class="col align-middle">
        <button class="btn btn-primary align-middle">
          <router-link to="/makeChallenge" class="challengeBtn"
            >챌린지 만들기</router-link
          >
        </button>
      </div>
      <div class="col-6"></div>
    </div>
          <div class="row">
    <div class="col">
      <li v-for="(challenge, challengeIdx) in challenges" :key="challengeIdx">
        <!-- /detailChallenge 번호로 넘겨줘야 함!!!!
          ${challengeNo}에 따른 상세페이지로 보이게끔
          나중에 수정 필피리피리필수!!!!!!!!!!!!!!!!!!!!!!!!****************
      -->
        <router-link
          :to="`/detailChallenge/${challenge.challengeNo}`"
          class="open-challenge"
        >

            <div class="col">
              <div class="box">
                <p class="challenge-title">{{ challenge.challengeName }}</p>
                <p class="challenge-period">
                  {{ challenge.startDate }} ~ {{ challenge.endDate }}
                </p>
                <p class="challenge-content">
                  {{ challenge.challengeContent }}
                </p>
                <li
                  v-for="(mission, missonIdx) in challenge.missions"
                  :key="missonIdx"
                  class="mission-list"
                >
                  <p>
                    <i class="bi bi-caret-right-fill" style="color: indigo"></i>
                    {{ mission.videoTitle }}
                  </p>
                </li>
              </div>
            </div>

        </router-link>
      </li>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  name: "OpenChallenge",
  computed: {
    ...mapState(["challenges"]),
  },
  created() {
    this.$store.dispatch("getChallengesAndMissions");
  },
  methods: {
    goDetail(challengeIdx) {
      let challengeNo = challengeIdx;
      this.$store.dispatch("goDetail", challengeNo);
    },
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
.box {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
  width: 400px;
  height: 400px;
  margin: 50px;
  padding: 15px;
}
.challenge-title {
  font-size: 30px;
  font-weight: 800;
  color: indigo;
}
.open-challenge {
  text-decoration: none;
  color: rgb(0, 12, 22);
}
.challengeBtn {
  color: white;
  text-decoration: none;
}
</style>
