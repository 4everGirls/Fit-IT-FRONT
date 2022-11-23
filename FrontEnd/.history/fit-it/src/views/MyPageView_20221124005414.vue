<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-4">
      <my-profile></my-profile>
    </div>
    <div class="col-7">
      <manage-my-challenge></manage-my-challenge>
    </div>
  </div>
</template>

<script>
import ManageMyChallenge from "@/components/user/mypage/ManageMyChallenge.vue";
import MyProfile from "@/components/user/mypage/MyProfile.vue";

export default {
  name: "MyPageView",
  components: {
    ManageMyChallenge,
    MyProfile,
  },
};
</script>

<style scoped></style>
