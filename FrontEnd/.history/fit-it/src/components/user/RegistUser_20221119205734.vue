<template>
  <div class="container">
    <form class="row g-3">
      <div class="col-3"></div>
      <div class="col">
        <!-- Logo -->
        <div class="row mb-5"></div>
        <h1 class="logo">Fit IT !</h1>
        <!-- login page -->
        <div class="row mb-3"></div>
        <h5 id="login-page" class="col text-center">
          이미 회원이신가요? &nbsp;
          <router-link id="login-link" to="/login">로그인 하기</router-link>
        </h5>

        <!-- regist form -->

        <div class="col-12">
          <label for="id" class="form-label">ID</label>
          <input
            type="text"
            class="form-control"
            id="id"
            placeholder="ID를 입력하세요."
          />
        </div>
        <div class="col-12">
          <label for="password" class="form-label">비밀번호</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="비밀번호를 입력하세요."
          />
        </div>
        <div class="col-12">
          <label for="passwordConfirm" class="form-label">비밀번호 확인</label>
          <input
            type="password"
            class="form-control"
            id="passwordConfirm"
            placeholder="비밀번호를 한 번 더 입력하세요."
          />
        </div>
        <div class="col-12">
          <label for="nickname" class="form-label">닉네임</label>
          <input
            type="text"
            class="form-control"
            id="nickname"
            placeholder="닉네임을 입력하세요."
          />
        </div>
        <div class="form-check col-md-6">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            id="gender"
          />
          <label class="form-check-label" for="gender"> 남자 </label>
        </div>
        <div class="form-check col-md-6">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            id="gender"
          />
          <label class="form-check-label" for="gender"> 여자 </label>
        </div>
        
        <div class="col-12">
          <button type="submit" class="btn btn-primary">가입하기</button>
        </div>
      </div>
      <div class="col-3"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistUser",
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
