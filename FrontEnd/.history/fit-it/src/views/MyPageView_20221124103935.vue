<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-3">
      <my-profile></my-profile>
    </div>
    <div class="col-6">
      <manage-my-challenge></manage-my-challenge>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
import ManageMyChallenge from "@/components/user/mypage/ManageMyChallenge.vue";
import MyProfile from "@/components/user/mypage/MyProfile.vue";
import MyJoinChallengeVue from "@/components/user/mypage/MyJoinChallenge.vue";

export default {
  name: "MyPageView",
  components: {
    ManageMyChallenge,
    MyProfile,
  },
};
</script>

<style scoped>
.row {
  width: 100%;
}
</style>
