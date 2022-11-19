<template>
  <div class="result-container">
    <h1>안녕</h1>
    <div class="list-container column">
      <div class="card" style="width: 18rem">
        <img
          v-for="video in videos"
          :key="video.videoId"
          :video="video"
          class="card-img-top"
          :src="video.snippet.thumbnails.default.url"
          alt="video-img"
        />
        <div class="card-body">
          <p class="card-text">
            {{ video.snippet.title }}
          </p>
          <button>추가</button>
        </div>
      </div>
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
    ...mapState(["videos"]),
  },
};
</script>

<style></style>
