<template>
  <div class="result-container">
    <div class="row mt-4 ms-2" id="box">
      <form>
        <li
        v-for="(mission, index) in missionList"
        :key="index"
        >
        <div class="row">
          <div class="col"></div>
          <div class="col" id="deletebtn"  @click="delteVideo" >x</div>
          <divdiv class="col" class="text-truncate">{{ mission.videoTitle}}</divdiv>
          <p id="deletebtn" @click="delteVideo">x</p>
        </div>
        </li>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VideoListFrom",
  computed: {
    ...mapState([ "missionList" ]),
  },
  methods: {
    deleteVideo() {

    },
  }
};

</script>

<style scoped>
.result-container {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
}
#deletebtn{
  color:red;
  font-weight: bold;
}
</style>
