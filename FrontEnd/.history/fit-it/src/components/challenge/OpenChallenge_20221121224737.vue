<template>
  <div>
    <h1 class="title">오픈된 챌린지</h1>
    <div>
      <li v-for="(challenge, index) in challengeList" :key="index">
        <div class="box">
          <p class="challenge-title">{{ challenge.challengeName }}</p>
          <p class="challenge-period">기간</p>
          <p class="challenge-content">{{ challenge.challengeContent }}</p>
          <li v-for="(mission, index) in missions" :key="index" class="mission-list">
            <p>{{ mission.videoTitle }}</p>
          </li>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OpenChallenge",
  computed: {
    ...mapState(["challengeList", "missions"]),
  },
};
</script>

<style>
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
    
}
</style>
