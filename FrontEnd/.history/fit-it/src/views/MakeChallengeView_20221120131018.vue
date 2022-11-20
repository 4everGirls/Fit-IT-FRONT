<template>
  <div class="container">
    <!--search-container-->
    <div class="row">
      <search-video></search-video>
    </div>
    <!--result form-->
    <div class="row">
    <search-result></search-result>
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