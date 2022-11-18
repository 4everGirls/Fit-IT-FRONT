<template>
    <div class="login-form">
        <div class="mb-3">
            <label for="id">ID</label>
            <p>
                <input type="text" id="id" v-model="id" placeholder="ID를 입력하세요.">
            <hr>
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