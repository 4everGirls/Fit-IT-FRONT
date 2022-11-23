<template>
  <div>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>









    <p>사이드바 입니다</p>
    <p>챌린지에 포함된 미션 리스트들을 보여주는 곳</p>
    <div class="row">
      <li
        class="col m-4"
        v-for="(mission, index) in indetailGetMissionList"
        :key="index"
      >
        <p @click="getMissionVideo(mission.missionNo)">- {{ mission.videoTitle }}</p>
      
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
    getMissionVideo(missionNo) {
      this.$store.dispatch("getMissionVideo", missionNo);
    }
  }
};
</script>

<style scoped>

</style>
