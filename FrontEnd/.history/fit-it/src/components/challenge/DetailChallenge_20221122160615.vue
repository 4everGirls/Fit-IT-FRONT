<template>
  <div class="container">
  <div class="row m-4">
    <div class="col-1"></div>
    <div class="col " >
        <div class="row">
          <div class="col" id="title">{{ challenge.challengeName }}</div>
          <div class="col">버튼</div>
        </div>
        
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

<style>
</style>
