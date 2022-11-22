<template>
  <div>
    <h2>내 챌린지 전체보기</h2>
  </div>
</template>

<script>
export default {
  name: "MyJoinChallengeView",
  computed: {
    ...mapState(["myjoinchallenges"]);
  }
};
</script>

<style scoped>

</style>
