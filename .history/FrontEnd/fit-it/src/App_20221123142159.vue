<template>
  <div id="app">
    <div id="header">
      <header-nav/>
    </div>
    <div id="all">

      <router-view />
    
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
  /* box-sizing: border-box; */
  list-style: none;
  background-color: #FBF3FF ;
  
}
 {
}
.text-center {
  text-align: center;
}
</style>
