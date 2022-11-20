<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col">
        <!-- Logo -->
        <div class="row mb-5"></div>
        <router-link to="/" class="logo-home" style="text-decoration: none;">
          <h1 class="logo">Fit IT !</h1>
        </router-link>
        <!-- regist page -->
        <div class="row mb-3"></div>
        <h5 id="regist-page" class="col text-center">회원이 아니신가요? &nbsp;
          <router-link id="regist-link" to="/regist">회원가입 하기</router-link>
        </h5>
        <div class="row mb-4"></div>
        <!-- login form-->
        <div class="login-form">
          <form>
            <div class="row mb-5">
              <label for="id" class="col-sm-2 col-form-label">ID</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="id" />
              </div>
            </div>
            <div class="row mb-5">
              <label for="password" class="col-sm-2 col-form-label"
                >비밀번호</label
              >
              <div class="col-sm-8">
                <input type="password" class="form-control" id="password" />
              </div>
            </div>
          </form>
          <div class="col text-center">
          <button type="submit" class="btn btn-primary" @click="login">
            로그인
          </button>
          </div>
          <!-- 구현해야 됨!! -->
          <!-- SNS login form -->
          <div>SNS 간편 로그인</div>
          <!-- find password-page -->
          <div>비밀번호 찾기</div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginUser",
  data() {
    return {
      user: {
        id: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("loginUser", this.user);
    },
  },
};
</script>

<style scoped>
.logo {
  text-align: center;
  color: indigo;
  font-weight: 750;
  font-size: 70px;
}

#regist-page {
  font-size: 15px;
}

#regist-link {
  color: indigo;
}
</style>
