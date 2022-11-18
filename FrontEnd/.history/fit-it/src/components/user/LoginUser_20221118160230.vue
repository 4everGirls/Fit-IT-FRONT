<template>
    <form method="post">
        <div class="form-group">
            <label for="username"><u>Username</u></label>
            <input type="text" class="form-control" id="username" name="username" autocomplete="off" autofocus required>
        </div>
        <div class="form-group">
            <label for="password"><u>Password<u></label>
            <input type="password" class="form-control" id="password" name="password" autocomplete="off" required>
            <a href="#">Forgot password?</a>
        </div>
    
        <div class="form-check">
            <label class="form-check-label" for="check">
                <input type="checkbox" class="form-check-input" id="check">Remember me
            </label>
        </div>
        <center>
            <button type="submit" name="login-btn" class="btn btn-success">Login</button>
        </center>
    </form>

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