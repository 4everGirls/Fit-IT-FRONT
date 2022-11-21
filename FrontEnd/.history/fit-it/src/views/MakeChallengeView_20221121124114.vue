<template>
  <div class="row ms-1">
    <!--search-container-->
    <div class="row">
      <search-video></search-video>
    </div>
    <!--result form-->
    <div class="row ms-3">
      <div class="col-1"></div>
      <div class="col-6 pe-0">
        <search-result></search-result>
      </div>
      <!-- 챌린지 만들기 폼-->
      <div class="col-3 ps-0">
        <regist-challenge-form></regist-challenge-form>
      </div>
      <div class="col-2 ps-">
        <video-list-form></video-list-form>
      </div>
      
    </div>
    </div>
</template>

<script>
import SearchVideo from '@/components/challenge/MakeChallenge/SearchVideo.vue';
import SearchResult from '@/components/challenge/MakeChallenge/SearchResult.vue';
import RegistChallengeForm from '@/components/challenge/MakeChallenge/RegistChallengeForm.vue';
import VideoListForm from '@/components/challenge/MakeChallenge/VideoListForm.vue';

export default {
    name: "MakeChallenge",
    components: {
        SearchVideo,
        SearchResult,
        RegistChallengeForm,
        VideoListForm,
    }
}
</script>

<style>
.col-1{
width:50px;
}
</style>