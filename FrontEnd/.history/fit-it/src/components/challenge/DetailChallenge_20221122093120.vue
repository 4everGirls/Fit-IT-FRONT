<template>
  <div>
    <h2>여기는 챌린지 상세보기 페이지</h2>
    <p></p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DetailChallenge",
  created() {
    this.$store.dispatch("goDetail");
  },
  computed:{
    ...mapState(["challengeList"])
  }
};
</script>

<style></style>
