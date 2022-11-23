<template>
  <div>
    <manage-my-challenge></manage-my-challenge>
    <my-level></my-level>
    <my-profile></my-profile>
  </div>
</template>

<script>
import ManageMyChallenge from '@/components/user/mypage/ManageMyChallenge.vue';
import MyBookMark from '@/components/user/mypage/MyBookMark.vue';
import MyLevel from '@/components/user/mypage/MyLevel.vue';
import MyProfile from '@/components/user/mypage/MyProfile.vue';

export default {
  name: "MyPageView",
  components: {
    ManageMyChallenge,
    MyBookMark,
    MyLevel,
    MyProfile,
  }
}
</script>

<style scoped>

</style>