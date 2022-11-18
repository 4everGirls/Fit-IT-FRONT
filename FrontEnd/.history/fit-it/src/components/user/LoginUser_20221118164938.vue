<template>
<div class="container">
    <v-app id="inspire">
        <v-main class="blue-grey lighten-4">
            <!-- Login Component -->
            <v-container style="max-width: 450px" fill-height>
                <v-layout align-center row wrap>
                    <v-flex xs12>
                        <v-card>
                            <div class="pa-10">
                                <h1 style="text-align: center" class="mb-10">Login</h1>
                                <form>
                                    <v-text-field id="email" v-model="user.email" label="Email" trim
                                        prepend-inner-icon="mdi-account"></v-text-field>
                                    <v-text-field id="password" v-model="user.password" label="Password" trim
                                        prepend-inner-icon="mdi-lock" type="password">
                                    </v-text-field>
                                    <div class="text-center">
                                        <v-btn class="mb-3" color="info" large block dark @click="login">
                                            Login
                                        </v-btn>
                                        <v-btn class="mb-3" color="info" large block dark>
                                            Forgot your Email/Password?
                                        </v-btn>
                                    </div>
                                </form>
                            </div>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
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
            this.$store.dispatch("loginUser", this.user);
        }
    }
}
</script>

<style>


</style>