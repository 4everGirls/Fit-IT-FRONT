<template>
  <div class="container">
    <h1 class="title">참여중인 챌린지</h1>
    <hr />
    <div v-if="isNotEmpty">
      <!--메인 페이지에서는 최대 3개까지만 보이고, 더 보고 싶으면 전체보기로 이동 -->
      <div class="row">

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
                  </div>
                  <div class="col">
                    
                  </div>
                  <div class="row">
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
                  <!-- <hr />
                  <div class="row">
                    <div class="col-10"></div>
                    <div class="col">
                      <button class="btn btn-primary">참여중</button>                     
                    </div>
                  </div> -->
                </div>
              </router-link>
            </div>
          </div>
        </li>
      </div>
      <!--전체보기 틀이랑 메인페이지 css 틀 똑같이 해도 될듯!!!! -->
      <div class="col"></div>
    </div>
    <div v-else>
      <div class="text-center">
        <p>
          아직 참여한 챌린지가 없어요. 챌린지에 참여해서 같이 건강해져 봐요!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyJoinChallenge",
  computed: {
    ...mapState(["myjoinchallenges", "loginUser"]),
    isNotEmpty() {
      console.log(this.myjoinchallenges);
      if (this.myjoinchallenges.length != 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.$store.dispatch("getMyJoinChallenges", this.loginUser.userNo);
  },
};
</script>

<style scoped>
.title {
  color: indigo;
  font-weight: 800;
}
.box {
  background-color: white;
  border-radius: 10px;
  width: 90%;
  height: 140px;
  margin: 50px 0 50px 50px;
  padding: 15px;
}
.myjoin-container {
  text-decoration: none;
  color: rgb(0, 12, 22);
}
.challenge-title {
  font-size: 20px;
  font-weight: 800;
  color: indigo;
}
.all-joins {
  color: indigo;
}
</style>
