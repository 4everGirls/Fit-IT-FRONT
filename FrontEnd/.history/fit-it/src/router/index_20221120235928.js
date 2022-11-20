import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistUser from "@/components/user/RegistUser.vue";
import LoginUser from "@/components/user/LoginUser.vue";
import MakeChallenge from "@/views/MakeChallengeView.vue";
import MyPage from "@/components/user/MyPage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginUser,
  },
  {
    path: "/regist",
    name: "regist",
    component: RegistUser,
  },
  {
    path: "/registTest",
    name: "registTest",
    component: RegistUsercopy,
  },
  {
    path: "/makeChallenge",
    name: "makeChallenge",
    component: MakeChallenge,
  },
  {
    path: "/myPage",
    name: "myPage",
    component: MyPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
