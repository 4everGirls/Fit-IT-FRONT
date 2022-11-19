<template>
  <div class="result-container">
    <h1>안녕</h1>
    <div class="list-container column">
      <div class="card" style="width: 18rem">
        <img
          v-for="video in videos"
          :key="video.videoId"
          class="card-img-top"
          :src="`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`"
          alt="video-img"
        />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
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
import { mapState } from 'vuex';
export default {
  name: "SearchResult",
};
</script>

<style></style>
