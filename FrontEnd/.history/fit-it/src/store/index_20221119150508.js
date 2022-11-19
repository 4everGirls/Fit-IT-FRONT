import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from "@/router";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const REST_API = `http://localhost:9999`;

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    loginUser: null
  },
  getters: {
  },
  mutations: {
    LOGIN_USER(state, user) {
      state.loginUser = user;
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
    }
  },
  modules: {
  }
})
