import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from "@/router";
import createPersistedState from "vuex-persistedstate";
import _ from "lodash";

Vue.use(Vuex)

const REST_API = `http://localhost:9999`;

export default new Vuex.Store({
  plugins: [createPersistedState()],
  // *****STATE
  state: {
    token: "",
    loginUser: {},
    user:{},
    videos: [],
    video: null,
    missionList: [],
    challengeList: [],
    reviews: [], // challengeList에 추가 필요
  },

  // *****GETTERS
  getters: {
  },
  mutations: {
    LOGIN_USER(state, {loginUser, token}) {
      state.loginUser = loginUser;
      state.token = token;
    },
    LOGOUT(state) {
      state.loginUser = {};
      state.token = "";
    },
    SEARCH_VIDEO(state, videos) {
      state.videos = videos
    },
    ADD_VIDEO(state, video){
      let current = state.missionList;
      let newList = [...current];
      newList.push(video);
      state.missionList = newList;
    },
    MAKE_CHALLENGE(state, challenge) {
      // let newChallenge = {...challenge};
      // newChallenge.missionList = [...state.missionList];
      // state.challengeList.push(newChallenge);
      // state.challengeList.push([...state.token]);
      // state.challengeList.push(challenge);
    
      let newChallenge = {...challenge};
      newChallenge['token'] = state.token;
      newChallenge['reviews'] = state.reviews; // 챌린지별 리뷰가 들어가나???? 확인 필요
      state.challengeList.push(newChallenge);
    },
    DELETE_MISSION(state, index) {
      state.missionList.splice(index, 1);
    }
  },

  // *****ACTIONS
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
        console.log(res.data.message);
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
          maxResults: 6,
        }
      })
        .then((res) => {
          console.log(res.data.items);
          let items = res.data.items;
          let newItems = items.map((item) => {
            item.snippet.title = _.unescape(item.snippet.title);
            return item;
          })
          console.log(newItems);
          commit("SEARCH_VIDEO", newItems);
        })
        .catch((err) => console.log(err));
    },
    checkId({commit},id) {
      commit
      const API_URL = `${REST_API}/userApi/idCheck/${id}`;
      
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          if(res.data === "success") {
            alert("사용 가능한 아이디입니다.");
          } else {
            alert("이미 사용 중인 아이디입니다.")
          }
        })
    },
    checkNickname({commit},nickname) {
      commit
      const API_URL = `${REST_API}/userApi/nicknameCheck/${nickname}`;
      
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          if(res.data === "success") {
            alert("사용 가능한 닉네임입니다.");
          } else {
            alert("이미 사용 중인 닉네임입니다")
          }
        })
    },
    getVideoList({commit}, video) {
      console.log(video)
      commit("ADD_VIDEO",video);
    },
    makeChallenge({commit}, challenge) {
      const API_URL = `${REST_API}/challengeApi/insertChallenge`; 

      axios({
        url: API_URL,
        method: "POST",
      })
        .then((res) =>)

      commit("MAKE_CHALLENGE", challenge);
      console.log(challenge);
    },
    deleteVideo({commit}, index) {
      console.log(commit);
      commit("DELETE_MISSION", index);
    }
  },
  modules: {
  }
})
