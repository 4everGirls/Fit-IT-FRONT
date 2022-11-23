<template>
  <div class="col">
    <div class="row-1"></div>
    <manage-my-challenge></manage-my-challenge>
    <my-level></my-level>
    <my-profile></my-profile>
  </div>
</template>

<script>
import ManageMyChallenge from '@/components/user/mypage/ManageMyChallenge.vue';
import MyLevel from '@/components/user/mypage/MyLevel.vue';
import MyProfile from '@/components/user/mypage/MyProfile.vue';

export default {
  name: "MyPageView",
  components: {
    ManageMyChallenge,
    MyLevel,
    MyProfile,
  }
}
</script>

<style scoped>

</style>