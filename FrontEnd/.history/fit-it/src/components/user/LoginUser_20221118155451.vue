<template>
    <div class="d-flex justify-content-center">
        <div class="">
                <h1>로그인</h1>
                <div class="email">
                    <img src="img/user.png">
                    <input text="email" id="email" placeholder="Email"><br>
                </div>
                <div class="password">
                    <img src="img/pass.png">
                    <input text="password" id="password" placeholder="Password"><br><br>
                </div>
                <div class="div_button">
                    <button class="button" type="button">Log In</button>
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
input {
    border: none;
}
</style>