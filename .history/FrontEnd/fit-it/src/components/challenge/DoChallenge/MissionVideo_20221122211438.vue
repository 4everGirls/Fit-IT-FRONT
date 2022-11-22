<template>
  <div>
    <h2>미션 비디오 컴포넌트</h2>

  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "MissionVideo",
  computed: {
    ...mapState(["video"]),
    videoURL() {
      const videoId = this.video.id.videoId
      return `https://www.youtube.com/embed/${videoId}`
    }
  },
}
</script>

<style scoped>

</style>