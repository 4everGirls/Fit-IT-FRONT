<template>
  <div>
    <p>여기는 챌린지 수행페이지</p>
    <mission-video></mission-video>
    <book-mark></book-mark>
    <mission-coment-list></mission-coment-list>
    <mission-video></mission-video>
    <write-mission-coment></write-mission-coment>
    <side-bar></side-bar>
  </div>
</template>

<script>
import BookMark from '@/components/challenge/DoChallenge/BookMark.vue';
import MissionComentList from '@/components/challenge/DoChallenge/MissionComentList.vue';
import MissonVideo from '@/components/challenge/DoChallenge/MissonVideo.vue';
import SideBar from '@/components/challenge/DoChallenge/SideBar.vue';
import WriteMissionComent from '@/components/challenge/DoChallenge/WriteMissionComent.vue';

export default {
name: "DoChallengeView",
components: {
    BookMark,
    MissionComentList,
    MissonVideo,
    SideBar,
    WriteMissionComent,
}
}
</script>

<style scoped>

</style>