<template>
  <div class="container">
    <h1 class="title">내 챌린지 관리하기</h1>
    <hr />
    <div class="row">
    <li v-for="(mychalleng, index) in mymakechallenges" :key="index">
      
      <div class="card" style="width: 16rem">
          
          <div class="card-body">
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
    </idv
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
