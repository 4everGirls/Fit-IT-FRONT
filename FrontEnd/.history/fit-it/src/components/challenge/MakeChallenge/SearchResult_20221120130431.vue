<template>
  <div class="result-container">
    <div class="row">
    <li class="col-6" v-for="video in videos" :key="video.videoId" :video="video">
      <div class="list-container column">
        <div class="card" style="width: 20rem">
          <img
            class="card-img-top"
            :src="video.snippet.thumbnails.high.url"
            alt="video-img"
          />
          <div class="card-body">
            <p class="card-text">
              {{ video.snippet.title }}
            </p>
            <button class="btn btn-primary">추가</button>
          </div>
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
  computed: {
    ...mapState(["videos", "video"]),
  },
};
</script>

<style></style>
