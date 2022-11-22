<template>
  <div>
    <p>사이드바 입니다</p>
    <p>챌린지에 포함된 미션 리스트들을 보여주는 곳</p>
    <div class="row">
      <li
        class="col m-4"
        v-for="(mission, index) in indetailGetMissionList"
        :key="index"
      >
        <p @click="showMissionVideo(mission)">- {{ mission.videoTitle }}</p>
      </li>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SideBar",
  computed: {
    ...mapState(["challenges", "challenge", "indetailGetMissionList"]),
  },
  created() {
    this.$store.dispatch("getDetailChallenge", this.$route.params.challengeNo);
    console.log(this.$route.params.challengeNo);
    this.$store.dispatch(
      "inDetailGetMissionList",
      this.$route.params.challengeNo
    );
  },
  methods: {
    showMissionVideo(mis) {
      this.$store.dispatch("showMissionVideo", videoId);
    }
  }
};
</script>

<style scoped>

</style>
