<template>
  <div>
    <div class="d-flex row justify-content-end">
      <div class="col"><h1 class="title">오픈된 챌린지</h1></div>
      <div class="col align-middle">
        <button class="btn btn-primary align-middle" in="challengeBtn">
          <router-link to="/makeChallenge" class="challengeBtn"
            >챌린지 만들기</router-link
          >
        </button>
      </div>
      <div class="col-6"></div>
    </div>
    <div class="row">
      <li
        class="col-4"
        v-for="(challenge, challengeIdx) in challenges"
        :key="challengeIdx"
      >
        <router-link
          :to="`/detailChallenge/${challenge.challengeNo}`"
          class="open-challenge"
        >
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
        </router-link>
      </li>
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
  margin: 50px;
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
  padding: 10px;
}
.align-middle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
</style>
