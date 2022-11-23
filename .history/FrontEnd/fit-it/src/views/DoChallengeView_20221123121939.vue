<template>
  <div>
    <p>여기는 챌린지 수행페이지</p>
    <div class="row">
      <div></div>
    </div>
    <book-mark></book-mark>
    <mission-video></mission-video>
    <mission-coment-list></mission-coment-list>
    <write-mission-coment></write-mission-coment>
    <side-bar></side-bar>
  </div>
</template>

<script>
import BookMark from "@/components/challenge/DoChallenge/BookMark.vue";
import MissionComentList from "@/components/challenge/DoChallenge/MissionComentList.vue";
import MissionVideo from "@/components/challenge/DoChallenge/MissionVideo.vue";
import SideBar from "@/components/challenge/DoChallenge/SideBar.vue";
import WriteMissionComent from "@/components/challenge/DoChallenge/WriteMissionComent.vue";

export default {
  name: "DoChallengeView",
  components: {
    BookMark,
    MissionComentList,
    MissionVideo,
    SideBar,
    WriteMissionComent,
  },
};
</script>

<style scoped></style>
