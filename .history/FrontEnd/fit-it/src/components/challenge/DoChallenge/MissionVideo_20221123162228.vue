<template>
  <div>
    <!-- <h2>{{ this.indetailGetMissionList.videoTitle }}</h2> -->
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row p-0">
          <div class="col-11"></div>
          <div class="col d-flex justify-content-end">
            <book-mark :videoId="this.video.videoId"></book-mark>
          </div>
        </div>
        <div class="row p-0">
          <div class="detail-video-title">
            {{ video.videoTitle }}
          </div>
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
      <div class="col-1"></div>
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
    ...mapState(["video", "missions", "indetailGetMissionList"]),
    videoURL() {
      const videoid = this.video.videoId;
      return `https://www.youtube.com/embed/${videoid}`;
    },
  },
};
</script>

<style scoped>
.detail-video-title {
  font-size: 25px;
  font-weight: 800;
  color: indigo;
  margin: 30px 0px 30px 10px;
}
</style>
