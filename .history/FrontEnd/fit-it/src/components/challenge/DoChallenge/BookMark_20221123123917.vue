<template>
    <button class="btn btn-primary" @click="addBookmark"><i class="bi bi-bookmark-heart-fill"></i></button>
</template>

<script>
export default {
  name: "BookMark",
  methods: {
    addBookmark() {
      this.$store.dispatch("addBookmark", this.videoId);
    },
  },
  props: {
    videoId: {
      type: String,
    },
  },
};
</script>

<style scoped>
* {
  background-color: aqua;
}
</style>
