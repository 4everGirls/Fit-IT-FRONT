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
          <div class="col" id="period"><i class="bi bi-calendar-check"></i> &nbsp;  &nbsp;{{ startd }} - {{ endd }}</div>
          
        </div>
        <div class="row mt-2">
          {{ challenge.challengeName }}
          
        </div>
        
    </div>
    <div class="col-1"></div>
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "DetailChallenge",
 
  computed:{
    ...mapState(["challenges", "challenge"]),
    startd(){
      return moment(this.challenge.startDate).format("YY/MM/DD");
    },
    endd(){
    return moment(this.challenge.endDate).format("YY/MM/DD");
    }

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
