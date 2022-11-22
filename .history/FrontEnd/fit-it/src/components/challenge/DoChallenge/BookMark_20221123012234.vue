<template>
  <div>
    <p>북마크 컴포넌트</p>
    <button class="btn btn-primary" @click="addBookmark">북마크</button>
  </div>
</template>

<script>
export default {
    name: "BookMark",
    // computed: {
    //   ...mapState([""])
    // },
    methods: {
      addBookmark() {
        this.$store.dispatch("addBookmark");
      }
    },
    props: [

    ]
}
</script>

<style scoped>
* {
  background-color: aqua;
}
</style>