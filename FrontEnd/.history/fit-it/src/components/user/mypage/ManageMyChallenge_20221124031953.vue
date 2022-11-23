<template>
  <div class="container">
    <h1 class="title">내 챌린지 관리하기</h1>
    <hr />
    <div class="row">
      <li
        class="col-3 m-4"
        v-for="(mychallenge, index) in mymakechallenges"
        :key="index"
      >
      <router-link to="/makeChallenge"></router-link>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <h5 class="card-title mb-3 text-truncate mb-1">
                {{ mychallenge.challengeName }}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                <i class="bi bi-people-fill"></i> n 명 참여중
              </h6>
              <p class="card-text" id="date">
                {{ mychallenge.startDate }} ~ {{ mychallenge.startDate }}
              </p>
              <p class="card-text text-truncat">
                {{ mychallenge.challengeContent }}
              </p>
            </div>
            <div class="row-1 ">
              <button
                class="btn btn-danger delete-btn"
                @click="deleteChallenge(mychallenge.challengeNo)"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ManageMyChallenge",
  computed: {
    ...mapState(["loginUser", "mymakechallenges", "challenges"]),
  },
  created() {
    this.$store.dispatch("getMyChallenges", this.loginUser.userNo);
    this.$store.dispatch("getChallengesAndMissions");
  },
  methods: {
    deleteChallenge(challengeNo) {
      var result = confirm("정말로 삭제하시겠습니까?");
      if (result) {
        this.$store.dispatch("deleteMyMakeChallenge", challengeNo);
      }
    },
    goDetail(challengeIdx) {
      let challengeNo = challengeIdx;
      this.$store.dispatch("goDetail", challengeNo);
    },
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
#date {
  color: indigo;
  font-size: 13px;
  font-weight: normal;
}
.delete-btn {
  margin: auto;
  display: block;
  position: absolute;
  bottom: 18px;
}
.card {
  border-style: none;
  height: 300px;
  width: 200px;
}
</style>
