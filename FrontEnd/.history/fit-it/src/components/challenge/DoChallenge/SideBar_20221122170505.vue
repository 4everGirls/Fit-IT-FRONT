<template>
  <div>
    <p>사이드바 입니다</p>
    <p>챌린지에 포함된 미션 리스트들을 보여주는 곳</p>
     <div class="row">
            <li class="col m-4" v-for="(mission, index) in indetailGetMissionList" :key="index">
                - {{ mission.videoTitle }} 
              
            </li>
        </div>
  </div>
</template>

<script>
export default {
name: "SideBar",
}
</script>

<style>

</style>