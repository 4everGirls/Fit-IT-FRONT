<template>
  <div>
    <p>북마크 컴포넌트</p>
    {{ this.videoId }}
    <button class="btn btn-primary" @click="addBookmark">북마크</button>
  </div>
</template>

<script>
export default {
  name: "BookMark",
  methods: {
    addBookmark() {
      this.$store.dispatch("addBookmark");
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
