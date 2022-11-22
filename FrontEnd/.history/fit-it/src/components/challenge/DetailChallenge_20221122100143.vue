<template>
  <div>
    <h2>여기는 챌린지 상세보기 페이지</h2>
    <p>이 페이지는</p>
    <p>{{ challenge.challengeName }}</p>
    <p>미션 페이지!!!!</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DetailChallenge",
  created() {
    this.$store.dispatch
    this.$store.dispatch("goDetail");
  },
  computed:{
      ...mapState(["challenge"])
  }
};
</script>

<style></style>
