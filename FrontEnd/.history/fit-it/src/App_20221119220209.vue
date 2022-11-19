<template>
  <div id="app">
    <header-nav/>

    <router-view />

  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue";
import MakeChallengeView from "./views/MakeChallengeView.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
    MakeChallengeView,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

.text-center {
  text-align: center;
}

</style>
