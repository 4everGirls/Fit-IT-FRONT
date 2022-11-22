<template>
  <div>
    <p>여기는 챌린지 수행페이지</p>
  </div>
</template>

<script>
import BookMark from '@/components/challenge/DoChallenge/BookMark.vue';
import MissionComentList from '@/components/challenge/DoChallenge/MissionComentList.vue';
import MissionVide

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