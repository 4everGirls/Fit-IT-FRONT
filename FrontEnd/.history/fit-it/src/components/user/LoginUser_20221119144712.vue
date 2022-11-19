<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col">
        <!-- Logo -->
        <h1 class="logo">Fit IT !</h1>
        <!-- regist page -->
        <h5 id="regist-page" class="col text-center">회원이 아니신가요? &nbsp;&nbsp;
          <router-link id="regist-link" to="/regist">회원가입 하기</router-link>
        </h5>
        <!-- login form-->
        <div class="login-form">
          <form>
            <div class="row mb-4">
              <label for="id" class="col-sm-2 col-form-label">ID</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="id" />
              </div>
            </div>
            <div class="row mb-4">
              <label for="password" class="col-sm-2 col-form-label"
                >비밀번호</label
              >
              <div class="col-sm-10">
                <input type="password" class="form-control" id="password" />
              </div>
            </div>
            <div class="col text-center">
            <button type="submit" class="btn btn-primary" @click="login">
              로그인
            </button>
            </div>
          </form>
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
