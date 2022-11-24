<template>
  <div class="container">
    <h1 class="title">참여중인 챌린지</h1>
    <hr />
    </
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyJoinChallenge",
  computed: {
    ...mapState(["myjoinchallenges", "loginUser"]),
    isNotEmpty() {
      console.log(this.myjoinchallenges);
      if (this.myjoinchallenges.length != 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.$store.dispatch("getMyJoinChallenges", this.loginUser.userNo);
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
.box {
  background-color: white;
  border-radius: 10px;
  width: 90%;
  height: 140px;
  margin: 50px 0 50px 50px;
  padding: 15px;
}
.myjoin-container {
  text-decoration: none;
  color: rgb(0, 12, 22);
}
.challenge-title {
  font-size: 20px;
  font-weight: 800;
  color: indigo;
}
.all-joins {
  color: indigo;
}
</style>
