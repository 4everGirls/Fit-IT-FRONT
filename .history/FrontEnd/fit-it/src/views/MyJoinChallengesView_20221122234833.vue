<template>
  <div>
    <h2 class="">내 챌린지 전체보기</h2>
    <li v-for="(mychallenge, index) in myjoinchallenges" :key="index">
        {{mychallenge.challengeName}}
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

</style>
