<template>
  <div class="container">
    <h1 class="title">내 챌린지 관리하기</h1>
    <hr />
    <div class="row">
    <li class="col-3 m-4" v-for="(mychalleng, index) in mymakechallenges" :key="index">
      
      <div class="card" style="width: 14rem">
          
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
            <p class="card-text text-truncate">
              {{ mychalleng.challengeName }}
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
              삭제
            </button>
          </div>
      </div>
    </li>
    </div>
    <div class="row">
      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ManageMyChallenge",
  computed: {
    ...mapState(["loginUser", "mymakechallenges"]),
  },
  created() {
    this.$store.dispatch("getMyChallenges", this.loginUser.userNo);
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
</style>
