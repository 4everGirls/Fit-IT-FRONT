<template>
  <div class="container">
    <form class="row g-3">
      <div class="col-3"></div>
      <div class="col">
        <!-- Logo -->
        <div class="row mb-5"></div>
        <router-link to="/" class="logo-home" style="text-decoration: none;">
          <h1 class="logo">Fit IT !</h1>
        </router-link>
        <!-- login page -->
        <div class="row mb-3"></div>
        <h5 id="login-page" class="col text-center">
          이미 회원이신가요? &nbsp;
          <router-link id="login-link" to="/login">로그인 하기</router-link>
        </h5>
        <div class="row mb-3"></div>
        <!-- regist form -->
        <div class="row mb-4">
          <label for="id" class="col-sm-3 col-form-label">ID</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="id" placeholder="ID를 입력하세요."/>
          </div>
          <!-- 중복체크 -->
          <div></div>
        </div>

        <div class="row mb-4">
          <label for="password" class="col-sm-3 col-form-label">비밀번호</label>
          <div class="col-sm-7">
            <input type="password" class="form-control" id="password" placeholder="비밀번호를 입력하세요."/>
          </div>
        </div>
        <div class="row mb-4">
          <label for="passwordConfirm" class="col-sm-3 col-form-label"
            >비밀번호 확인</label
          >
          <div class="col-sm-7">
            <input type="password" class="form-control" id="passwordConfirm" placeholder="비밀번호를 한 번 더 입력하세요."/>
          </div>
        </div>
        <div class="row mb-4">
          <label for="nickname" class="col-sm-3 col-form-label"
            >닉네임</label
          >
          <div class="col-sm-7">
            <input type="text" class="form-control" id="nickname" placeholder="닉네임을 입력하세요."/>
          </div>
          <!-- 중복체크 -->
          <div></div>
        </div>

        <div class="row mb-4">
          <label for="gender" class="col-sm-4 col-form-label">성별</label>
          <div class="form-check col">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="gender"
            />
            <label class="col-sm-4 form-check-label" for="gender">남자</label>
          </div>
          <div class="form-check col">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="gender"
            />
            <label class="col-sm-4 form-check-label" for="gender">여자</label>
          </div>
          <div class="col-sm-2"></div>
        </div>
        <div class="row mb-4">
          <label for="birth" class="col-sm-3 col-form-label">생년월일</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="birth" placeholder="YYMMDD" />
          </div>
        </div>
        <div class="row mb-4">
          <label for="height" class="col-sm-3 col-form-label">키</label>
          <div class="col-sm-7">
            <input type="number" class="form-control" id="height" placeholder="cm" />
          </div>
        </div>
        <div class="row mb-4">
          <label for="weight" class="col-sm-3 col-form-label">몸무게</label>
          <div class="col-sm-7">
            <input type="number" class="form-control" id="weight" placeholder="kg" />
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </form>
    <!--button-->
    <div class="col text-center">
      <button type="submit" class="btn btn-primary" @click="regist">
        가입하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistUser",
  methods: {
    regist() {
      if (
        this.id === "" ||
        this.password === "" ||
        this.passwordConfirm === "" ||
        this.nickname === "" ||
        this.gender === "" ||
        this.birth === "" ||
        this.height === "" ||
        this.weight === ""
      ) {
        alert("모든 내용을 입력해주세요");
        return;
      }

      let user = {
        id: this.id,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
        nickname: this.nickname,
        gender: this.gender,
        birth: this.birth,
        height: this.height,
        weight: this.weight,
      };

      this.$store.dispatch("createUser", this.user);
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

#login-page {
  font-size: 15px;
}

#login-link {
  color: indigo;
}
</style>
