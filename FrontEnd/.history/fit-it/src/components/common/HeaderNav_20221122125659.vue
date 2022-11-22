<template>
  <header>
    <!-- 로그인 전 (login, )-->
    <!-- Nav Bar 오른쪽 정렬 -->
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand nav-link">Fit IT !</router-link>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <!--토큰 있을 때-->
          <div v-if="token">
            <ul class="navbar-nav">
              <!--알람-->
              <li class="nav-item"></li>
              <li class="nav-item">
                <router-link to="'/mypage/'" class="nav-link"
                  >{{ loginUser.nickname }} 님</router-link
                >
              </li>
              <!--로그아웃-->
              <li class="nav-item">
                <div class="nav-link" @click="logout">Logout</div>
              </li>
            </ul>
          </div>
          <!--토큰 없을 때-->
          <div v-else>
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/regist" class="nav-link"
                  >회원가입</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/registTest" class="nav-link"
                  >유효성검사</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderNav",
  computed: {
    ...mapState(["token", "loginUser"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
.navbar-brand {
  color: indigo;
  font-weight: 750;
  font-size: 27px;
}
</style>
