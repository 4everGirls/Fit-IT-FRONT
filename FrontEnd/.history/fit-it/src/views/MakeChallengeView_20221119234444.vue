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

export default {
    name: "MakeChallenge",
    components: {
        SearchVideo,
        SearchRe
    }
}
</script>

<style>

</style>