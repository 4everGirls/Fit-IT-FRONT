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

.box {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
  width: 800px;
  height: 140px;
  margin: 50px;
  padding: 15px;
}

.myjoin-container {
  text-decoration: none;
  color: rgb(0, 12, 22);
}

.challenge-title {
  font-size: 20px;
  font-weight: 800;
  color: indigo;
}

.all-joins {
  color: indigo;
}
</style>
