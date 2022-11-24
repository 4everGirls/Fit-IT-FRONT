<template>
  <div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row p-0">
          <div class="detail-video-title">
            {{ video.videoTitle }}
          </div>
          <div class="detail-channel-name">
            <img src="@/assets/img/fast-forward.png" alt="">[ {{ video.channelName }} ]
          </div>
          <iframe
            width="560"
            height="500"
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
// import BookMark from "./BookMark.vue";

export default {
  name: "MissionVideo",
  components: {
    // BookMark,
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
  font-size: 40px;
  font-weight: 1000;
  color: indigo;
  margin: 30px 0px 40px 0px;
}
.detail-channel-name {
  text-align: right;
  font-size: 25px;
  font-weight: 500;
}
</style>
