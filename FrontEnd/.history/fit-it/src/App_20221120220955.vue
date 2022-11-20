<template>
  <div id="app">
    <header-nav/>

    <router-link to="/makeChallenge">챌린지 만들기</router-link>
    <router-view />

  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue";


export default {
  name: "App",
  components: {
    HeaderNav,
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

@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
