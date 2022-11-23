<template>
  <div>
    <h2 class="title">내 챌린지 전체보기</h2>
    <li v-for="(mychallenge, index) in myjoinchallenges" :key="index">
      <div>
        <router-link :to="`/doChallenge/${mychallenge.challengeNo}`" class="myjoin-container">
          <div class="box">
            <div class="challenge-title">
              {{ mychallenge.challengeName }}
            </div>
            <p class="challenge-period">
              {{ mychallenge.startDate }} ~ {{ mychallenge.endDate }}
            </p>
            <hr>
    
          </div>
        </router-link>
      </div>
    </li>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "MyJoinChallengeView",
  computed: {
    ...mapState(["myjoinchallenges"]),
  }
};
</script>

<style scoped>
.title {
    color: indigo;
    font-weight: 800;
}
</style>
