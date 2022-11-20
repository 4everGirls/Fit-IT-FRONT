<template>
  <div class="container">
    <!--search-container-->
    <div class="row">
      <search-video></search-video>
    </div>
    <!--result form-->
    <div class="row">
      <div class="col-1"></div>
      <div class="col-6">
        <search-result></search-result>
      </div>
      <!-- 챌린지 만들기 폼-->
      <div class="col-2">

      </div>
      <div class="col-2">

      </div>
      <div class="col-1"></div>
    </div>
    </div>
</template>

<script>
import SearchVideo from '@/components/challenge/MakeChallenge/SearchVideo.vue';
import SearchResult from '@/components/challenge/MakeChallenge/SearchResult.vue';

export default {
    name: "MakeChallenge",
    components: {
        SearchVideo,
        SearchResult,
    }
}
</script>

<style>

</style>