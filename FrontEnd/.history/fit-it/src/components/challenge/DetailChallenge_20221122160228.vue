<template>
  <div class="container">
  <div class="row m-4">
    <div class="col-1"></div>
    <div class="col align-self-center" >
        <h2>여기는 챌린지 상세보기 페이지</h2>
        <p>이 페이지는</p>
        <p>{{ challenge.challengeName }}</p>
        <p>미션 페이지!!!!</p>
    </div>
    <div class="col-1"></div>
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DetailChallenge",
  computed:{
    ...mapState(["challenges", "challenge"])
  },
  created() {
    this.$store.dispatch("getDetailChallenge", this.$route.params.challengeNo);
    console.log(this.$route.params.challengeNo);
  }
};
</script>

<style></style>
