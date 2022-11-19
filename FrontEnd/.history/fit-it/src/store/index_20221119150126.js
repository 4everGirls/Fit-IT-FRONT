import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
// import router from "@/router";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const REST_API = `http://localhost:9999`;

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    loginUser({ commit }, user) {
      console.log(user);
      const API_URL = `${REST_API}/userApi/login`;
      axios({

      })
    }
  },
  modules: {
  }
})
