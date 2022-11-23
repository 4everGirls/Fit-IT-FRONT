<template>
  <div>
    <h1 class="title">마이 챌린지</h1>
    <div v-if="isNotEmpty">
      <!--메인 페이지에서는 최대 3개까지만 보이고, 더 보고 싶으면 전체보기로 이동 -->
      <router-link to="doChallenge">챌린지 수행페이지로 이동</router-link>
      <li v-for="(mychallenge, index) in myjoinchallenges" :key="index">
        <div>
          <!-- {{myjoinchallengeList}} -->
          {{mychallenge.challengeName}}
        </div>
      </li>
      <!--전체보기 틀이랑 메인페이지 css 틀 똑같이 해도 될듯!!!! -->
      <div>
        <router-link to="/myjoins">전체보기</router-link>
      </div>
      <div class="col"></div>
    </div>
    <div v-else>
      <div class="text-center">
        <p>
          아직 참여한 챌린지가 없어요. 챌린지에 참여해서 같이 건강해져 봐요!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyChallenge",
  computed: {
    ...mapState(["myjoinchallenges", "loginUser"]),
    isNotEmpty() {
      console.log(this.myjoinchallenges);
      if (this.myjoinchallenges.length != 0) {
        return true;
      } else {
        return false;
      }
    },
    // myjoinchallengeList() {
    //   if (this.myjoinchallenges.length > 3) {
    //     return ;
    //   }
    // }
  },
  created() {
    this.$store.dispatch("getMyJoinChallenges", this.loginUser.userNo);
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
</style>
