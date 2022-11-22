import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistUser from "@/components/user/RegistUser.vue";
import LoginUser from "@/components/user/LoginUser.vue";
import MakeChallenge from "@/views/MakeChallengeView.vue";
import MyPage from "@/views/MyPageView.vue";
import DetailChallenge from "@/components/challenge/DetailChallenge.vue";
import DoChallenge from "@/views/DoChallengeView.vue";
import MyJoinChallenges from "@/views/MyJoinChallengesView.vue";

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
    path: "/makeChallenge",
    name: "makeChallenge",
    component: MakeChallenge,
  },
  {
    path: "/myPage",
    name: "myPage",
    component: MyPage,
  },
  {
    path: "/detailChallenge/:challengeNo",
    name: "detailChallenge",
    component: DetailChallenge,
  },
  {
    // mission 넘버를 넣을지 아니면 challenge 넘버를 넣을지는 한 번 고민해봐야겠음
    // 왜냐하면 챌린지 수행페이지를 클릭하면 해당 미션의 비디오 화면이 나오기 때문에..!
    // path: "/doChallenge/:missionNo",
    path: "/doChallenge/:challengeNo",
    name: "doChallenge",
    component: DoChallenge,
  },
  {
    path: "/myjoins",
    name: "myjoins",
    component: MyJoinChallenges,
    
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
