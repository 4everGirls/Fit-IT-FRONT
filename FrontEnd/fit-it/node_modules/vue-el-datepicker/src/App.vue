<template>
  <div id="app">
    
    <p>{{date}}</p>

    <date-picker 
      custom-class="center"
      ref="date"
      v-model="date"
      type="year"
      separator="-"
      @getValue="getTime"
    />

  </div>
</template>

<script>
import datePicker from '@/components/datePicker'
export default {
  data(){
    return {
      date: '2020-01-08',
    }
  },
  components: {
    datePicker
  },
  methods:{
    getTime(time){
      console.log(time)
      console.log(time.date)
      
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.center{
  width: 320px;
  margin: 0 auto auto auto;
}
</style>

