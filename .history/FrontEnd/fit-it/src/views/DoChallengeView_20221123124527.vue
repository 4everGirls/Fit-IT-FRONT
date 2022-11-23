<template>
  <div>
    <div class="row">
      <div class="col-3">
        <button
          class="btn btn-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <i class="bi bi-list"></i>
        </button>

        <div
          class="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabindex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <side-bar></side-bar>
          </div>
        </div>
      </div>

      <div class="col">
   
        <mission-video></mission-video>
        <mission-coment-list></mission-coment-list>
        <write-mission-coment></write-mission-coment>
      </div>
    </div>
  </div>
</template>

<script>
import MissionComentList from "@/components/challenge/DoChallenge/MissionComentList.vue";
import MissionVideo from "@/components/challenge/DoChallenge/MissionVideo.vue";
import SideBar from "@/components/challenge/DoChallenge/SideBar.vue";
import WriteMissionComent from "@/components/challenge/DoChallenge/WriteMissionComent.vue";

export default {
  name: "DoChallengeView",
  components: {
    MissionComentList,
    MissionVideo,
    SideBar,
    WriteMissionComent,
  },
};
</script>

<style scoped>
.offcanvas-body {
  
}
</style>
