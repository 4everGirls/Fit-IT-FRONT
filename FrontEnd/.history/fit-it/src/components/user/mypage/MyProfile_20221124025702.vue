<template>
  <div class="col container">
    <div class="row-5">
      <img src="@/assets/img/profile.png" class="profile" />
    </div>
    <div class="row-3 profile-container">
      <h1 class="nickname">{{ loginUser.nickname }}</h1>
    </div>
    <div class="row-4">
      <p class="join-text">
        우리가 만난지<span class="date-text">{{ calculateDate }}</span
        >일 됐어요!🔥
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "MyProfile",
  // computed: {
  // },
  computed: {
    ...mapState(["loginUser"]),
    calculateDate() {
      let today = moment(new Date()).format("YYMMDD");
      let joinDate = moment(this.loginUser.joinDate).format("YYMMDD");

      let date = today - joinDate;
      return date;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-container {
  margin: 20px 0 10px 0;
}
.date-text {
  color: indigo;
  font-weight: 800;
  font-size: 20px;
}
.join-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
