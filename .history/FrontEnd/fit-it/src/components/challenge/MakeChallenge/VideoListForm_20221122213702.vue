<template>
  <div class="result-container">
    <div class="row mt-4 ms-2" id="box">
      <div class="row mt-3">
        <div class="col-1"></div>
        <div class="col">추가된 동영상</div>
        <div class="col-1"></div>
      </div>
      <form>
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
.result-container {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
}
#deletebtn {
  color: red;
  font-weight: bold;
}
#videotitle {
  font-weight: bold;
}
</style>
