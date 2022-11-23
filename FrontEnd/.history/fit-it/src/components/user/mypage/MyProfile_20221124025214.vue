<template>
  <div class="col container">
    <div class="row-5 profile">
      <img src="@/assets/img/profile.png" />
    </div>
    <div class="row-3 profile-container">
      <h1 class="nickname">{{ loginUser.nickname }}</h1>
    </div>
    <div class="row-4">
      <p>
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
  margin: 20px;
}
.date-text {
  color: indigo;
  font-weight: 800;
  font-size: 20px;
}
</style>
