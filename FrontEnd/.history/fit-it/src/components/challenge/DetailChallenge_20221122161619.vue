<template>
  <div class="container">
  <div class="row m-4">
    <div class="col-1"></div>
    <div class="col " >
        <div class="row">
          <div class="col" id="title">{{ challenge.challengeName }}</div>
          <div class="col">
            <button class="btn btn-primary">챌린지 참여하기</button>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col" id="period"><i class="bi bi-calendar-check"></i> &nbsp;  &nbsp;{{ challenge.startDate | yyyyMMdd}} - {{ challenge.endDate }}</div>
          
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
  data()
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
#title{
 font-size: 30px;
 font-weight: bold;
}
</style>
