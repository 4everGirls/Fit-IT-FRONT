<template>
  <div class="col container">
    <div class="col-5 profile">
      <img src="@/assets/img/profile.png" />
    </div>
    <div class="col-7 profile-container">
      <div class="row">
        <h1 class="nickname">{{ loginUser.nickname }}</h1>
        <p>우리가 만난지 {{date}}일 됐어요!🔥</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyProfile",
  data: 
  computed: {
    ...mapState(["loginUser"]),
    date: {
      return calculateDate;
    }
  },
  method: {
    calculateDate() {

    }
  }
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
