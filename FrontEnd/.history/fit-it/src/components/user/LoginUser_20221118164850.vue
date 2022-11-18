<template>
<div>
    <h1>Fit IT !</h1>
    <div class="login-form">
        <form>
            <div class="row mb-4">
                <label for="id" class="col-sm-2 col-form-label">ID</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="id">
                </div>
            </div>
            <div class="row mb-4">
                <label for="password" class="col-sm-2 col-form-label">비밀번호</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="password">
                </div>
            </div>
            <button type="submit" class="btn btn-primary" @click="login">로그인</button>
        </form>
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
            }
        }
    },
    methods: {
        login() {
            
        }
    }
}
</script>

<style>


</style>