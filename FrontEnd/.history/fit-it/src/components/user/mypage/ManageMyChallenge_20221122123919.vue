<template>
    <div class="container">
        <h1 class="title">내 챌린지 관리하기</h1>
        <hr>
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
            
          </div>
        </div>
      </li>
    </div>

    </div>
    
</template>

<script>
export default {
    name: "ManageMyChallenge",
    created() {
     this.$store.dispatch("getMyChallenges"){
        userNo :"1",
     };
     
   },

}
</script>

<style scoped>
.title {
    color: indigo;
    font-weight: 800;
}
</style>