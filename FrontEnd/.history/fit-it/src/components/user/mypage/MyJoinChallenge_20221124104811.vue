<template>
  <div class="container">
    <h1 class="title">참여한 챌린지 </h1>
    <hr />
    <div class="row">
        <div id="show-all" class="d-flex flex-col justify-content-end">
          <router-link to="/myjoins" class="all-joins">전체보기</router-link>
        </div>
        <li v-for="(mychallenge, index) in myjoinchallenges" :key="index">
          <div class="row">
            <div>
              <router-link
                :to="`/doChallenge/${mychallenge.challengeNo}`"
                class="myjoin-container"
              >
                <div class="box">
                  <div class="row">
                    <div class="col-11">
                      <div class="challenge-title">
                        {{ mychallenge.challengeName }}
                      </div>
                      <p class="challenge-period">
                        {{ mychallenge.startDate }} ~ {{ mychallenge.endDate }}
                      </p>
                    </div>
                    <div v-if="myjoinchallenges.isComplete === 'Y'">
                      <div class="col">
                        <img src="@/assets/img/check-mark.png" width="50" height="50" /> 
                      </div>
                    </div>
                    <div v-else>
                      <div class="col">
                        <img src="@/assets/img/loading.png" width="50" height="50" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-10"></div>
                    <div class="col">
                      <button class="btn btn-primary">참여중</button>                     
                    </div>
                  </div>
                </div>
              </router-link>
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
  name: "MyJoinChallenge",
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
  margin: 11px 0 11px 0;
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
.card-title {
  color: indigo;
  font-weight: 1000;
  font-size: 20px;
}
.go-detail {
  text-decoration: none;
  color: black;
}
</style>
