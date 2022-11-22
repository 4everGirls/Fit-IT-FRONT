<template>
  <div>
    <h2>미션 비디오 컴포넌트</h2>
    <iframe
      width="560"
      height="315"
      :src="videoURL"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    
  </div>
</template>

<script>
import { mapState } from "vuex";


export default {
  name: "MissionVideo",
  components: {
    BookMark,
  },
  computed: {
    ...mapState(["video"]),
    videoURL() {
      const videoId = this.video.videoId;
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<style scoped></style>
