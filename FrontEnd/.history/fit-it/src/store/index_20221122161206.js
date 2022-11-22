import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import createPersistedState from "vuex-persistedstate";
import _ from "lodash";

Vue.use(Vuex);

const REST_API = `http://localhost:9999`;

export default new Vuex.Store({
  plugins: [createPersistedState()],
  // *****STATE
  state: {
    token: "",             // 로그인 시 필요한 토큰
    loginUser: {},         // 로그인한 유저
    user: {},              // 유저들
    videos: [],            // 유튜브 api에서 가져와서 뿌려줄 비디오들
    video: null,           // 하나의 유튜브 비디오
    missions: [],          // 미션리스트(비디오집합)
    // challengeList: [],     // 오픈된 챌린지의 리스트
    challenge: {},         // 챌린지 하나
    challenges: [],        // DB에서 가져온 챌린지 정보(GET) => (메인페이지 오픈된 챌린지 리스트)
    mymakechallenges: [],  // 내가 만든 챌린지리스트 (마이페이지에 있는 내 챌린지임)
    myregistchallenges: [],// 내가 등록한 챌린지(메인페이지에 있는 내 챌린지임)
    reviews: [],           // 챌린지에 달린 리뷰
                           // challengeList에 추가 필요
  },

  // ***************************************************************************GETTERS
  getters: {},

  // ***************************************************************************MUTATIONS
  mutations: {
    LOGIN_USER(state, { loginUser, token }) {
      state.loginUser = loginUser;
      state.token = token;
    },
    LOGOUT(state) {
      state.loginUser = {};
      state.token = "";
    },
    SEARCH_VIDEO(state, videos) {
      state.videos = videos;
    },
    ADD_VIDEO(state, video) {
      let current = state.missions;
      let newList = [...current];
      newList.push(video);
      state.missions = newList;
    },
    MAKE_CHALLENGE(state, challenge) {
      let newChallenge = { ...challenge };
      newChallenge["token"] = state.token;
      newChallenge["reviews"] = state.reviews; // 챌린지별 리뷰가 들어가나???? 확인 필요
      state.challenges.push(newChallenge);
    },
    DELETE_MISSION(state, index) {
      state.missions.splice(index, 1);
    },
    GET_CHALLENGES(state, challenges) {
      state.challenges = challenges;
    },
    GET_DETAIL_CHALLENGE(state, challenge) {
      state.challenge = challenge;
    },
    GET_MY_MAKE_CHALLENGE(state, mymakechallenges) {
      state.mymakechallenges = mymakechallenges;
    },
    // setchallengeNo(state, cno) {
    //   state.cno = cno;
    // },
  },

  // ******************************************************************************ACTIONS
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

    searchVideo({ commit }, keyword) {
      const YOUTUBE_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
      const API_URL = `https://www.googleapis.com/youtube/v3/search`;

      console.log(keyword);
      axios({
        url: API_URL,
        method: "GET",
        params: {
          key: YOUTUBE_KEY,
          part: "snippet",
          q: keyword,
          type: "video",
          maxResults: 6,
        },
      })
        .then((res) => {
          console.log(res.data.items);
          let items = res.data.items;
          let newItems = items.map((item) => {
            item.snippet.title = _.unescape(item.snippet.title);
            return item;
          });
          console.log(newItems);
          commit("SEARCH_VIDEO", newItems);
        })
        .catch((err) => console.log(err));
    },

    checkId({ commit }, id) {
      commit;
      const API_URL = `${REST_API}/userApi/idCheck/${id}`;

      axios({
        url: API_URL,
        method: "GET",
      }).then((res) => {
        if (res.data === "success") {
          alert("사용 가능한 아이디입니다.");
        } else {
          alert("이미 사용 중인 아이디입니다.");
        }
      });
    },

    checkNickname({ commit }, nickname) {
      commit;
      const API_URL = `${REST_API}/userApi/nicknameCheck/${nickname}`;

      axios({
        url: API_URL,
        method: "GET",
      }).then((res) => {
        if (res.data === "success") {
          alert("사용 가능한 닉네임입니다.");
        } else {
          alert("이미 사용 중인 닉네임입니다");
        }
      });
    },

    getVideoList({ commit }, video) {
      console.log(video);
      commit("ADD_VIDEO", video);
    },

    // makeChallenge({ state, commit }, challenge) {
    //   // 비동기 작업을 수행
    //   const API_URL = `${REST_API}/challengeApi/insertChallenge`;

    //   axios({
    //     url: API_URL,
    //     method: "POST",
    //     data: challenge,
    //   })
    //     .then((res) => {
    //       console.log(res.data);

    //       commit("setchallengeNo", res.data);
    //     })
    //     .then(() => {
    //       console.log(state.cno);
    //       const API_URL2 = `${REST_API}/challengeApi/insertMission/${state.cno}}`;
    //       console.log(API_URL2);
    //       axios({
    //         url: API_URL2,
    //         method: "POST",
    //         data: challenge.missions,
    //       }).then(() => {
    //         // console.log(challenge);
    //         alert("챌린지 등록이 완료되었습니다.");
    //         router.push("/detailChallenge"); //나중에 ${challengeNO}로 보내기
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   commit("MAKE_CHALLENGE", challenge);
    //   console.log(challenge);
    // },
    makeChallengePromise({ commit }, challenge) {
      return new Promise((response, reject) => {
        // 비동기 작업 수행
        const API_URL = `${REST_API}/challengeApi/insertChallenge`;

        axios({
          url: API_URL,
          method: "POST",
          data: challenge,
        })
          .then((res) => {
            console.log(res.data);

            commit("setchallengeNo", res.data);
            response(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    makeMissionPromise({ commit }, payload) {
      commit
      return new Promise((response, reject) => {
        // 비동기 작업 수행
        const API_URL = `${REST_API}/challengeApi/insertMission/${payload.challengeNo}`;
        let newMissions = payload.missions.map((mission) => {
          return {
            videoTitle: mission.videoTitle,
            challengeNo: payload.challengeNo,
            videoId: mission.videoId,
            videoThumbnail: mission.videoThumbnail.url,
            channelName: mission.channelName
          }
        })
        console.log(newMissions);

        axios({
          url: API_URL,
          method: "POST",
          data: newMissions,
        })
          .then(() => {
            alert("챌린지 등록이 완료되었습니다.");
            router.push("/detailChallenge"); //나중에 ${challengeNO}로 보내기
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },

    deleteVideo({ commit }, index) {
      commit("DELETE_MISSION", index);
    },

    getChallenges({ commit }) {
      const API_URL = `${REST_API}/challengeApi/allChallenge`;
      axios({
        url: API_URL,
        method: "GET",
      }).then((res) => {
        let challenges = res.data;
        commit("GET_CHALLENGES", challenges);
      });
    },
    getDetailChallenge({commit}, challengeNo) {
      console.log(commit);
      console.log(challengeNo);
      const API_URL = `${REST_API}/challengeApi/detailChallenge/${challengeNo}`;
      axios({
        url: API_URL,
        method: "GET",
      }).then((res) => {
        let challenge = res.data;
        commit("GET_DETAIL_CHALLENGE", challenge);
      })
      .catch((err) => console.log(err));
    },

    goDetail({ commit }) {
      const API_URL = `${REST_API}/challengeApi/detailChallenge`;
      commit;
      console.log(API_URL);
      // console.log(challengeNo);
      // axios({
      //   url: API_URL,
      //   method: "GET",
      //   data: challenge,
      // })
      //   .then((res) => {
      //     commit("SET_DETAILS", challenge);
      //   }
      //   .catch((err) => {
      //   console.log(err);
      // },
    },

    getMyChallenges({commit}, userNo){
      const API_URL = `${REST_API}/challengeApi/makeChallengeList/${userNo}`;

      axios({
        url: API_URL,
        method: "GET",
      }).then((res) => {
        let mymakechallenges = res.data;
        commit("GET_MY_MAKE_CHALLENGE", mymakechallenges);
      })
      .catch((err) => console.log(err));
    },
    deleteMyMakeChallenge({state, commit},challengeNo) {
      console.log(state.loginUser.userNo);
      console.log(challengeNo);
      const API_URL = `${REST_API}/challengeApi/deleteChallenge/${challengeNo}`;
      const API_URL2 = `${REST_API}/challengeApi/makeChallengeList/${state.loginUser.userNo}`;
      axios({
        url: API_URL,
        method: "DELETE",
      }).then(() => {
        axios({
          url: API_URL2,
          method: "GET",
        }).then((res) => {
          let mymakechallenges = res.data;
          commit("GET_MY_MAKE_CHALLENGE", mymakechallenges);
        })
      })
    },
    myregistchallenges({})
  },
  modules: {},
});
