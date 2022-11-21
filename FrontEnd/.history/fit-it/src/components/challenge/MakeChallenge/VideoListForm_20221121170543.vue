<template>
  <div class="result-container">
    <div class="row mt-4 ms-2" id="box">
      <form>
        <li
        v-for="(mission, index) in missionList"
        :key="index"
        >
        <div class="col">
          <p text-truncate>{{ mission.videoTitle}}</p>
          <p>x</p>
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
};

</script>

<style scoped>
.result-container {
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
}
</style>
