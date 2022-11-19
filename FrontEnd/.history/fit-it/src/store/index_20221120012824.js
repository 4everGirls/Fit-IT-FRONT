import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from "@/router";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const REST_API = `http://localhost:9999`;
const API_URL = `https://www.googleapis.com/youtube/v3/search`;
const YOUTUBE_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    loginUser: null,
    videos: [],
    video: null,
  },
  getters: {
  },
  mutations: {
    LOGIN_USER(state, user) {
      state.loginUser = user;
    },
    SEARCH_VIDEO(state, videos) {
      state.videos = videos
    },
  },
  actions: {
    loginUser({ commit }, user) {
      console.log(user);
      const API_URL = `${REST_API}/userApi/login`;
      axios({
        url: API_URL,
        method: "POST",
        data: user,
      })
        .then((res) => {
        if (res.data.message === "success") {
            commit("LOGIN_USER", user);
            sessionStorage.setItem("access-token", res.data["access-token"]);
            router.push({ name: "home" });
          } else {
            alert("로그인에 실패하였습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createUser({ commit }, user) {
      const API_URL = `${REST_API}/userApi/signup`;

      axios({
        url: API_URL,
        method: "POST",
        data: user,
      })
        .then((res) => {
          commit;
          res;
          alert("회원 가입이 완료 되었습니다.");
          router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchVideo({commit}, keyword) {
      console.log(keyword);
      // axios({
      //   url: API_URL,
      //   method: "GET",
      //   params: {
      //     key: YOUTUBE_KEY,
      //     part: 'snippet',
      //     q: keyword,
      //     type: 'video',
      //     maxResults: 3,
      //   }
      // })
      //   .then((res) => {
      //     console.log(res.data);
      //     commit("SEARCH_VIDEO", res.data.items)
      //   })
      //   .catch((err) => console.log(err));
      console.log({commit);
    },
  },
  modules: {
  }
})
