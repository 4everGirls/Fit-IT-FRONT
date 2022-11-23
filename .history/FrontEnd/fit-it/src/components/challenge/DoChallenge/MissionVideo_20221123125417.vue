<template>
  <div>
    <p>여기</p>
    <h2>{{ this.indetailGetMissionList.videoTitle }}</h2>
      
      <div class="row p-0">
        <div class="col-11"></div>
        <div class="col d-flex justify-content-end">
          <book-mark :videoId="this.video.videoId"></book-mark>
        </div>
      </div>
      <div class="row p-0">
        <iframe
          width="560"
          height="315"
          :src="videoURL"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

    </div>
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
    ...mapState(["video", "indetailGetMissionList"]),
    videoURL() {
      const videoid = this.video.videoId;
      return `https://www.youtube.com/embed/${videoid}`;
    },
  },
};
</script>

<style scoped></style>
