<template>
  <div id="app">
    <header-nav/>
    <button class="btn btn-primary">
      <router-link to="/makeChallenge">챌린지 만들기</router-link>
    </button>
    <hr>
    <router-view />
    <div id="all">
    
    </div>

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
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

#app {
  font-family: 'Nanum Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  
}
#all
.text-center {
  text-align: center;
}
</style>
