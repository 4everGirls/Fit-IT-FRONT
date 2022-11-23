<template>
  <div>
    <div class="row">
      <div class="title">
        {{ challenge. }}
      </div>
      <li v-for="(mission, index) in indetailGetMissionList" :key="index">
        <p @click="getMissionVideo(mission.missionNo)">
          - {{ mission.videoTitle }}
        </p>
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
    },
  },
};
</script>

<style scoped></style>
