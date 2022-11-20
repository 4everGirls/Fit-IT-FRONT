<template>
    <header>
    <!-- 로그인 전 (login, )-->
    <!-- Nav Bar 오른쪽 정렬 -->
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand nav-link">Fit IT !</router-link>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <div v-if="token">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/regist" class="nav-link">회원가입</router-link>
                    </li>
                    </ul>
                </div>
                <div v-else>
                    <v-btn href="/login" text>
                        <span class="mr-2">로그인</span>
                        <v-icon>mdi-login</v-icon>
                    </v-btn>
                    <v-btn href="/regist" text>
                        <span class="mr-2">회원가입</span>
                    </v-btn>
                    </div>
            </div>
        </div>
    </nav>
    </header>
</template>

<script>
export default {
name: "HeaderNav",
};
</script>

<style>
.navbar-brand {
color: indigo;
font-weight: 750;
font-size: 27px;
}
</style>