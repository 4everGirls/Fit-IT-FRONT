<template>
  <div class="col container">
    <div class="col-5 profile">
      <img src="@/assets/img/profile.png" />
    </div>
    <div class="col-7 profile-container">
      <h1 class="nickname">{{ loginUser.nickname }}</h1>
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
.container {
  justify-content: center;
}
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
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}
</style>
