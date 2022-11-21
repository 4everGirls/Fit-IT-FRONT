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
      </li>
    </div>

    <!--Pagination-->
    <footer>
      <ul class="pagination">
        <li class="page-item disabled">
          <span class="page-link">이전</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page">
          <span class="page-link">2</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">다음</a>
        </li>
      </ul>
    </footer>
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
    ...mapState(["videos", "video", "missionList"]),
  },
  methods: {
    addChallenge(videoId, videoTitle, channelName, videoThumbnail) {
      if(this.missionList.length <= 10)
      this.$store.dispatch("getVideoList", {
        videoId,
        videoTitle,
        channelName,
        videoThumbnail
      });
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
