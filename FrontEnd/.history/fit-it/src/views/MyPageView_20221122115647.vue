<template>
  <div>
    <p>여기는 마이페이지</p>
  </div>
</template>

<script>
import ManageMyChallenge from '@/components/user/mypage/ManageMyChallenge.vue';
import MyBookMark from '@/components/user/mypage/MyBookMark.vue';
import 

export default {
  name: "MyPageView",
  comments: {
    ManageMyChallenge,
    MyBookMark,
    MyLevel,
    MyProfile,
  }
}
</script>

<style scoped>

</style>