<template>
<div class="container">
    <h2>로그인</h2>
    <fieldset class="text-center">
        <label for="id">아이디</label>
        <input type="text" id="id" v-model="id" class="view" /><br />
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" class="view" /><br />
        <button class="btn" @click="login">로그인</button>
    </fieldset>
</div>
</template>

<script>
export default {
    name: "LoginUser",

}
</script>

<style>
body {
    text-align: center;
    background-color: #F6F6F6F8;
}

input {
    border: 
    border-style: groove;
    width: 200px;
}

button {
    border-style: groove;
}

</style>