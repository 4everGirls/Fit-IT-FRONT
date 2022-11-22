<template>
  <div>
    <h2>여기는 챌린지 상세보기 페이지</h2>
  </div>
</template>

<script>
import vuex from 

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
