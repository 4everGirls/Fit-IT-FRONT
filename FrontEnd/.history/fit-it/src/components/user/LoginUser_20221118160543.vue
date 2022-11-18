<template>
<div>
    <div class="mb-3 row">
        <label for="id" class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
            <input type="text" class="form-control-plaintext" id="id" placeholder="ID를 입력하세요">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword">
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