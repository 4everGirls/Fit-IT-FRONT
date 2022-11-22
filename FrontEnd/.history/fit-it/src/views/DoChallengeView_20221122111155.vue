<template>
  <div>
    <p>여기는 챌린지 수행페이지</p>
    <mission-video></mission-video>
    <book-mark></book-mark>
    <mission-coment-lis></mission-coment-lis>
    <write-mission-coment></write-mission-coment>
    
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
    MissionVideo,
    SideBar,
    WriteMissionComent,
}
}
</script>

<style scoped>

</style>