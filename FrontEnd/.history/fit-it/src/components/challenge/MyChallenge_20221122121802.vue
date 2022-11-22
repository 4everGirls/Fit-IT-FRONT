<template>
    <div class="container">
        <h1 class="title">마이 챌린지</h1>
        <hr>
    </div>
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
              @click.once="
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
</template>

<script>
export default {
    name: "MyChallenge",

}
</script>

<style scoped>
.title {
    color: indigo;
    font-weight: 800;
}
</style>