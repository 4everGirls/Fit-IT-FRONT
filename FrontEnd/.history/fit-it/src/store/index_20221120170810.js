import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from "@/router";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const REST_API = `http://localhost:9999`;

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: "",
    loginUser: {},
    user:{},
    videos: [],
    video: null,
  },
  getters: {
  },
  mutations: {
    LOGIN_USER(state, {user, token}) {
      state.user = user;
      state.token = token;
    },
    LOGOUT(state) {
      state.loginUser = {};
      state.token = "";
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
        params: user,
      })
      .then((res) => {
        // console.log(res.data.message);
        if (res.data.message === "success") {
          let token = res.data["access-token"];
          let loginUser = res.data["user"];
          console.log(token);
          console.log(loginUser);
          commit("LOGIN_USER", { loginUser, token });
          sessionStorage.setItem("access-token", token);
          router.push({ name: "home" });
        } else {
          alert("로그인에 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    },
    logout({ commit }) {
      sessionStorage.removeItem("access-token");
      commit("LOGOUT");
      router.push({ name: "home" });
    },
    createUser({ commit }, user) {
      console.log(user);
      const API_URL = `${REST_API}/userApi/signup`;
      
      axios({
        url: API_URL,
        method: "POST",
        data: user,
      })
      .then(() => {
        console.log(user);
        commit;
        
        alert("회원 가입이 완료 되었습니다.");
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    },
    searchVideo({commit}, keyword) {
      const YOUTUBE_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
      const API_URL = `https://www.googleapis.com/youtube/v3/search`;
      
      console.log(keyword);
      axios({
        url: API_URL,
        method: "GET",
        params: {
          key: YOUTUBE_KEY,
          part: 'snippet',
          q: keyword,
          type: 'video',
          maxResults: 4,
        }
      })
        .then((res) => {
          console.log(res.data.items);
          commit("SEARCH_VIDEO", res.data.items)
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {
  }
})
