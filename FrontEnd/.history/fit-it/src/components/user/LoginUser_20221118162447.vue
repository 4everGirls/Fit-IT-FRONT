<template>
<div class="login-form">
    <h1 class="home">Fit IT !</h1>
    <div class="mb-3 row">
        <label for="id" class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
            <input type="text" class="form-control-plaintext" id="id" placeholder="ID를 입력하세요.">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="password" class="col-sm-2 col-form-label">비밀번호</label>
        <div class="col-sm-10">
            <input type="password" class="form-control-plaintext" id="password" placeholder="비밀번호를 입력하세요.">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "LoginUser",

}
</script>

<style>
.login-form {
    justify-content: center;
}
input {
    border: none;
}
</style>