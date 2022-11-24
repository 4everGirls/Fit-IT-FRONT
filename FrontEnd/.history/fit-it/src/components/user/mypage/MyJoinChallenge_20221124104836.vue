<template>
  <div class="container">
    <h1 class="title">참여한 챌린지 </h1>
    <hr />
    
    <div class="row"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyJoinChallenge",
  computed: {
    ...mapState(["loginUser", "mymakechallenges", "challenges"]),
  },
  created() {
    this.$store.dispatch("getMyChallenges", this.loginUser.userNo);
    this.$store.dispatch("getChallengesAndMissions");
  },
  methods: {
    deleteChallenge(challengeNo) {
      var result = confirm("정말로 삭제하시겠습니까?");
      if (result) {
        this.$store.dispatch("deleteMyMakeChallenge", challengeNo);
      }
    },
    goDetail(challengeIdx) {
      let challengeNo = challengeIdx;
      this.$store.dispatch("goDetail", challengeNo);
    },
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
#date {
  color: indigo;
  font-size: 13px;
  font-weight: normal;
  margin: 11px 0 11px 0;
}
.delete-btn {
  margin: auto;
  display: block;
  position: absolute;
  bottom: 18px;
}
.card {
  border-style: none;
  height: 300px;
  width: 200px;
}
.card-title {
  color: indigo;
  font-weight: 1000;
  font-size: 20px;
}
.go-detail {
  text-decoration: none;
  color: black;
}
</style>
