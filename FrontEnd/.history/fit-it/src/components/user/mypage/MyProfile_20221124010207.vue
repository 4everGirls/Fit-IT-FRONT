<template>
  <div class="col">
    <div class="row-5">
      <img src="@/assets/img/profile.png" class="profile" />
    </div>
    <div class="row-7">
      <h1 class="nickname">{{loginUser.nickname}} 님</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyProfile",
  computed: {
    ...mapState(["loginUser"]),
  },
};
</script>

<style scoped>
.profile {
  width: 200px;
}
.nickname {
  color: indigo;
  
}
</style>
