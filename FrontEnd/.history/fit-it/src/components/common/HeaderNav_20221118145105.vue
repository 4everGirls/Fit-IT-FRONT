<template>
    <header>
        <!-- 로그인 전 (login, )-->
        <!-- Nav Bar 오른쪽 정렬 -->
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <div class="container-fluid">
                <div>
                    <router-link to="/" class="navbar-brand">Fit IT !</router-link>

                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderNav",

}
</script>

<style>
.navbar-brand {
    color: indigo;
    font-weight: 750;
    font-size: 27px;
}
</style>