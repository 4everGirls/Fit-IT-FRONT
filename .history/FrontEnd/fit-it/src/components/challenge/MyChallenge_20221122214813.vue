<template>
  <div class="container">
    <h1 class="title">마이 챌린지</h1>
    <v-if this.myjoinchallenges.length != 0>
      <router-link to="doChallenge">챌린지 수행페이지로 이동</router-link>
      <!-- <li v-for="(mychallenge, index) in myjoinchallenges" :key="index">
              </li> -->
    </v-if>
    <v-else>
      <div>
        <p></p>
      </div>
    </v-else>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyChallenge",
  computed: {
    ...mapState(["myjoinchallenges"]),
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
</style>
