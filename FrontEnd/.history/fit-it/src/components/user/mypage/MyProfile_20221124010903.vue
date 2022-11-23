<template>
  <div class="col">
    <div class="col-5 profile">
      <img src="@/assets/img/profile.png" />
    </div>
    <div class="col-7">
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
  width: 180px;
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
  margin: 50px;
}
</style>
