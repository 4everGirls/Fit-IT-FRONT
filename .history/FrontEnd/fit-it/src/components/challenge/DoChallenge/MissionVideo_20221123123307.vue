<template>
  <div>
    <h2>{{this.challenges.challengeName}}</h2>
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
import BookMark from "./BookMark.vue";

export default {
  name: "MissionVideo",
  components: {
    BookMark,
  },
  computed: {
    ...mapState(["video", "challenges"]),
    videoURL() {
      const videoid = this.video.videoId;
      return `https://www.youtube.com/embed/${videoid}`;
    },
  },
};
</script>

<style scoped></style>
