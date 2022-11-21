<template>
    <div>
        <h1 class="title">오픈된 챌린지</h1>
        <div>
        <li v-for="(challengeNo, index) in challengeList" :key="index">리스트</li>
    </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OpenChallenge",
  computed: {
    ...mapState(["challengeList"]),
  },
};
</script>

<style>
.title {
  color: indigo;
  font-weight: 800;
}
</style>
