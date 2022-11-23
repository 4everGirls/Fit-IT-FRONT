<template>
    <button class="btn btn-primary" @click="addBookmark">북마크</button>
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
