<template>
  <div class="col">
    <div class="row-1"></div>
    <div class="row=4"></div>
    <manage-my-challenge></manage-my-challenge>
    <my-profile></my-profile>
  </div>
</template>

<script>
import ManageMyChallenge from '@/components/user/mypage/ManageMyChallenge.vue';
import MyProfile from '@/components/user/mypage/MyProfile.vue';

export default {
  name: "MyPageView",
  components: {
    ManageMyChallenge,
    MyProfile,
  }
}
</script>

<style scoped>

</style>