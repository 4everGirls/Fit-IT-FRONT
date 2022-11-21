<template>
  <div class="result-container">
    <div class="row mt-4 ms-2" id="box">
      <div class="row mt-2 ml" id="title">추가된 동영상</div>
      <form>
        <li
        v-for="(mission, index) in missionList"
        :key="index"
        >
        <div class="row mt-3 mb-3">

          <div class="col text-truncate" id="videotitle" >{{ mission.videoTitle}}</div>
          <div class="col-1" id="deletebtn"  @click="delteVideo" >x</div>
          
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
      this.$store.dispatch("deleteVideo");
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
#videotitle{
  font-weight: bold;
}

</style>
