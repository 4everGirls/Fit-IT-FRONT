<template>
  <div>
    <h2>미션 비디오 컴포넌트</h2>

  </div>
</template>

<script>
export default {
  name: "MissionVideo",
  computed: {
    ...mapState(["video"])
  },
  created() {
    this.$store.dispatch("getMissionVideo",);
  }
}
</script>

<style scoped>

</style>