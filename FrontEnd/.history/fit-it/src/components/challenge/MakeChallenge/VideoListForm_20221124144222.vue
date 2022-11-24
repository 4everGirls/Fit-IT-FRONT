<template>
  <div class="result-container">
    <div class="row" id="box">
      <div class="row mt-3">
        <div class="col-1"></div>
        <div class="col result-title">추가된 동영상</div>
        <div class="col-1"></div>
      </div>
      <form class="list-container">
        <li v-for="(mission, index) in missions" :key="index">
          <div class="row mt-3 mb-3">
            <div class="col ps-0 text-truncate" id="videotitle">
              <i class="bi bi-caret-right-fill" style="color: indigo"></i>
              {{ mission.videoTitle }}
            </div>
            <div class="col-1" id="deletebtn" @click="deleteVideo(index)">
              x
            </div>
          </div>
        </li>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  name: "VideoListFrom",
  computed: {
    ...mapState(["missions"]),
  },
  methods: {
    deleteVideo(index) {
      console.log(index);
      this.$store.dispatch("deleteVideo", index);
    },
  },
};
</script>

<style scoped>
.result-title {
  color: indigo;
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  margin: 0 15px 15px 15px;
}
.result-container {
  background-color: white;
  border-radius: 13px;
  height: 90%;
}
#deletebtn {
  color: red;
  font-weight: 1000;
  margin: 0 20px 0 0;
}
#videotitle {
  font-weight: bold;
}
.list-container {
  margin: 10px;
}
#box {
  padding: 20px;
}
</style>
