<template>
  <div class="container">
    <h1 class="title">내 챌린지 관리하기</h1>
    <hr />

    <div class="row">
      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ManageMyChallenge",
  computed: {
    ...mapState(["loginUser", "mymakechallenges"]),
  },
  created() {
    // console.log(this.loginUser.userNo);
    console.log(mymakechallenges.);
    this.$store.dispatch("getMyChallenges", this.loginUser.userNo);
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
</style>
