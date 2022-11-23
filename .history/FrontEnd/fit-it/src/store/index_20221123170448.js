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
  // ****************************************************************************STATE
  state: {
    token: "", // 로그인 시 필요한 토큰
    loginUser: {}, // 로그인한 유저
    user: {}, // 유저들
    videos: [], // 유튜브 api에서 가져와서 뿌려줄 비디오들
    video: {}, // 하나의 유튜브 비디오
    missions: [], // 미션리스트(비디오집합)
    // challengeList: [],  // 오픈된 챌린지의 리스트
    challenge: {}, // 챌린지 하나
    challenges: [], // DB에서 가져온 챌린지 정보(GET) => (메인페이지 오픈된 챌린지 리스트)
    mymakechallenges: [], // 내가 만든 챌린지리스트 (마이페이지에 있는 내 챌린지임)
    myjoinchallenges: [], // 내가 등록한 챌린지(메인페이지에 있는 내 챌린지임)
    reviews: [], // 챌린지에 달린 리뷰
    indetailGetMissionList: [], //디테일 페이지에서 특정 챌린지의 미션리스트정보를 담는 배열
    bookmarks: [], // 북마크 리스트
    bookmark: {}, // 북마크한 "미션" 하나
    isJoin: "", //현재 챌린지 참여중인지 보여주는거 1이면 참여중 0이면 아님

    // challengeList에 추가 필요
  },

  // ****************************************************************************GETTERS
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
    IN_DETAIL_GET_MISSIONLIST(state, indetailGetMissionList) {
      state.indetailGetMissionList = indetailGetMissionList;
    },
    GET_VIDEO(state, missionVideo) {
      state.video = missionVideo;
    },
    GET_MY_JOIN_CHALLENGE(state, myjoinchallenges) {
      state.myjoinchallenges = myjoinchallenges;
    },
    IS_JOIN(state, isJoin) {
      state.isJoin = isJoin;
    },
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
      commit;
      return new Promise((response, reject) => {
        // 비동기 작업 수행
        const API_URL = `${REST_API}/challengeApi/insertMission/${payload.challengeNo}`;
        let newMissions = payload.missions.map((mission) => {
          return {
            videoTitle: mission.videoTitle,
            challengeNo: payload.challengeNo,
            videoId: mission.videoId,
            videoThumbnail: mission.videoThumbnail.url,
            channelName: mission.channelName,
          };
        });
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
    // getChallengesPromise({commit}){
    //   return new Promise((resolve, reject) => {
    //     const API_URL = `${REST_API}/challengeApi/allChallenge`;
    //     axios({
    //       url: API_URL,
    //       method: "GET",
    //     }).then((res) => {
    //       let challenges = res.data;
    //       resolve(res.data);
    //     }).catch(err =>{
    //       reject(err);
    //     });
    //   })
    // },
    getChallengesAndMissions({ commit }) {
      const API_URL = `${REST_API}/challengeApi/allChallenge`;
      axios({
        url: API_URL,
        method: "GET",
      }).then((res) => {
        let challenges = res.data;
        Promise.all(
          challenges.map((challenge) => {
            return axios.get(
              `${REST_API}/challengeApi/detailMission/${challenge.challengeNo}`
            );
          })
        ).then((missionLists) => {
          missionLists.forEach((missionList, i) => {
            challenges[i].missions = missionList.data;
          });
          commit("GET_CHALLENGES", challenges);
        });
      });
    },

    getDetailChallenge({ state, commit }, challengeNo) {
      console.log(commit);
      console.log(challengeNo);

      //챌린지 정보를 받아오는 곳
      const API_URL = `${REST_API}/challengeApi/detailChallenge/${challengeNo}`;
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          let challengeNo = res.data.challengeNo;
          console.log("d여기");
          //챌린지 안에 participant 넣어야 함
          const API_URL2 = `${REST_API}/challengeApi/participantInfo/${challengeNo}`;
          axios({
            url: API_URL2,
            method: "GET",
          }).then((res)=>{
            let challengeInfo = state.challenge;
            console.log(res.data);
            challengeInfo.participantInfo = res.data;

            commit("GET_DETAIL_CHALLENGE", challengeInfo);
          });

          // Promise.all(challenge.map((challengeA) => {
          //   return axios.get(`${REST_API}/challengeApi/detailMission/${challengeA.challengeNo}`)
          // })).then((missionLists)=>{
          //   missionLists.forEach((missionList, i) => {
          //     challenge[i].missions = missionList.data;
          //   });
          //   commit("GET_DETAIL_CHALLENGE", challenge);
          // });
          // commit("GET_DETAIL_CHALLENGE", challenge);
        })
        .catch((err) => console.log(err));

      //참여버튼
      let userNo = state.loginUser.userNo; //현재로그인된 userNo의 정보.. state에 저장된거 쓰자
      const API_URL2 = `${REST_API}/challengeApi/isJoinChallenge/${challengeNo}/${userNo}`;

      axios({
        url: API_URL2,
        method: "GET",
      })
        .then((res) => {
          console.log(res.data);
          let isJoin = res.data;
          commit("IS_JOIN", isJoin);
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

    getMyChallenges({ commit }, userNo) {
      const API_URL = `${REST_API}/challengeApi/makeChallengeList/${userNo}`;

      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          let mymakechallenges = res.data;
          commit("GET_MY_MAKE_CHALLENGE", mymakechallenges);
        })
        .catch((err) => console.log(err));
    },
    deleteMyMakeChallenge({ state, commit }, challengeNo) {
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
        });
      });
    },
    inDetailGetMissionList({ commit }, challengeNo) {
      const API_URL = `${REST_API}/challengeApi/detailMission/${challengeNo}`;

      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          let indetailGetMissionList = res.data;
          console.log(indetailGetMissionList);
          commit("IN_DETAIL_GET_MISSIONLIST", indetailGetMissionList);
        })
        .catch((err) => console.log(err));
    },
    getMyJoinChallenges({ commit }, userNo) {
      const API_URL = `${REST_API}/challengeApi/myJoinChallengeList/${userNo}`;

      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          let myjoinchallenges = res.data;
          console.log(res.data);
          commit("GET_MY_JOIN_CHALLENGE", myjoinchallenges);
        })
        .catch((err) => console.log(err));
    },
    //조인했는지 안했는지 체크하자
    isJoinOrNotLetCheck({ commit }, joinInfo) {
      console.log(joinInfo.challenge);
      let temp = 0;
      for (var i in joinInfo.challenge.participantInfo) { // 위와 같은 동작을 하는 for / in 문
        if(i == joinInfo.userNo){
          temp = 1;
        }
      }
      // const API_URL = `${REST_API}/challengeApi/isJoinChallenge/${joinInfo.challengeNo}/${joinInfo.userNo}`;
      // axios({
      //   url: API_URL,
      //   method: "GET",
      // }).then((res) => {
      //   commit("IS_JOIN", res.data);
      // });
    },

    // 나중에 다시 확인 필요***********
    joinChallenge({ state, commit }, joinInfo) {
      console.log(joinInfo.challengeNo);
      commit;
      const API_URL = `${REST_API}/challengeApi/joinChallenge/${joinInfo.challengeNo}/${joinInfo.userNo}`;

      axios({
        url: API_URL,
        method: "GET",
        //data: state.joinParticipantInfo,
      })
        .then(() => {
          //참여가 되면 그 상세 페이지에서 참여 버튼 바뀌게 해야함.......
          alert("챌린지에 등록되었습니다.");
        })
        .then(() => {
          let userNo = state.loginUser.userNo; //현재로그인된 userNo의 정보.. state에 저장된거 쓰자
          const API_URL2 = `${REST_API}/challengeApi/isJoinChallenge/${joinInfo.challengeNo}/${userNo}`;

          axios({
            url: API_URL2,
            method: "GET",
          })
            .then((res) => {
              console.log(res.data);
              let isJoin = res.data;
              commit("IS_JOIN", isJoin);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    notJoinChallenge({ state, commit }, notJoinInfo) {
      commit;
      console.log(notJoinInfo.challengeNo);
      const API_URL = `${REST_API}/challengeApi/notJoinChallenge/${notJoinInfo.challengeNo}/${notJoinInfo.userNo}`;

      axios({
        url: API_URL,
        method: "DELETE",
        //data: state.joinParticipantInfo,
      })
        .then(() => {
          //참여가 되면 그 상세 페이지에서 참여 버튼 바뀌게 해야함.......
          alert("챌린지 참여 취소.");
        })
        .then(() => {
          let userNo = state.loginUser.userNo; //현재로그인된 userNo의 정보.. state에 저장된거 쓰자
          const API_URL2 = `${REST_API}/challengeApi/isJoinChallenge/${notJoinInfo.challengeNo}/${userNo}`;

          axios({
            url: API_URL2,
            method: "GET",
          })
            .then((res) => {
              console.log(res.data);
              let isJoin = res.data;
              commit("IS_JOIN", isJoin);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMissionVideo({ commit }, missionNo) {
      const API_URL = `${REST_API}/challengeApi/missionVideo/${missionNo}`;
      axios({
        url: API_URL,
        method: "GET",
      }).then((res) => {
        let missionVideo = res.data;
        console.log(missionVideo);
        commit("GET_VIDEO", missionVideo);
      });
    },
    // addBookmark() {
    //   const API_URL = `${REST_API}/challengeApi/insertBookmark`;
    //   axios({
    //     url: API_URL,
    //     method: "POST",
    //   })
    // }
  },
  modules: {},
});
