<template>
  <div class="container">
    <!--search-container-->
    <div class="row">
        <search-video></search-video>
        
    </div>
    <!--result form-->
    <div></div>
  </div>
</template>

<script>
import SearchVideo from '@/components/challenge/MakeChallenge/SearchVideo.vue';
import S

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