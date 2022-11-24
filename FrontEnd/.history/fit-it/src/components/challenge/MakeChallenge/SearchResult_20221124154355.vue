<template>
  <div class="container">
    <div class="row">
      <li
        class="col-3 m-4"
        v-for="video in videos"
        :key="video.videoId"
        :video="video"
      >
        <div class="card" style="width: 16rem">
          <img
            class="card-img-top"
            :src="video.snippet.thumbnails.high.url"
            alt="video-img"
          />
          <div class="card-body">
            <p class="card-text text-truncate">
              {{ video.snippet.title }}
            </p>
            <div class="row ">
            <button
              class="btn btn-primary"
              @click="
                addChallenge(
                  video.id.videoId,
                  video.snippet.title,
                  video.snippet.channelTitle,
                  video.snippet.thumbnails.high
                )
              "
            >
              추가
            </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchResult",

  data() {
    return {
      videoAdd: {
        videoId: "",
        videoTitle: "",
        channelName: "",
        videoThumbnail: "",
      },
    };
  },

  computed: {
    ...mapState(["videos", "video", "missions"]),
  },
  methods: {
    addChallenge(videoId, videoTitle, channelName, videoThumbnail) {
      if (this.missions.length <= 10) {
        this.$store.dispatch("getVideoList", {
          videoId,
          videoTitle,
          channelName,
          videoThumbnail,
        });
      } else {
        alert("더이상 추가 할 수 없습니다.");
      }
    },
  },
};
</script>

<style scoped>
.card-text {
  font-size: 15px;
  font-weight: 100;
}

</style>
