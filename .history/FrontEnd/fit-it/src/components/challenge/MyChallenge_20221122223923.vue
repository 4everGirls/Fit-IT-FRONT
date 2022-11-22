<template>
  <div class="container">
    <h1 class="title">마이 챌린지</h1>
    <div v-if="isNotEmpty">
      <router-link to="doChallenge">챌린지 수행페이지로 이동</router-link>
      <li v-for="(mychallenge, index) in myjoinchallenges" :key="index"></li>
        
    </div>
    <div v-else>
      <div class="text-center">
        <p>
          아직 참여한 챌린지가 없어요. 챌린지에 참여해서 같이 건강해져 봐요!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyChallenge",
  computed: {
    ...mapState(["myjoinchallenges"]),
    isNotEmpty() {
      if (this.myjoinchallenges.length != 0) return true;
      return true;
    },
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
</style>
