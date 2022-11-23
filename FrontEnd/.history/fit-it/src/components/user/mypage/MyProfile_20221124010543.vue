<template>
  <div class="col">
    <div class="row-5">
      <img src="@/assets/img/profile.png" class="profile" />
    </div>
    <div class="row-7">
      <div class="nickname-container">
        <h1 class="nickname">{{ loginUser.nickname }} 님</h1>
      </div>
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
  display: flex;
    justify-content: center;
    align-items: center;
}
.nickname {
  color: indigo;
  font-weight: 800;
}
.nickname-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
