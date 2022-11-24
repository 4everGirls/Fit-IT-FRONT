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
                    <div class="row">
                    <div class="col-10">
                      <div class="challenge-title">
                        {{ mychallenge.challengeName }}
                      </div>
                      <p class="challenge-period">
                        {{ mychallenge.startDate }} ~ {{ mychallenge.endDate }}
                      </p>
                    </div>
                    <div class="col">
                      <img src="@/assets/img/loading.png" width="50" height="50" />
                    </div>
                  </div>
                  </div>
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
        <p>아직 참여한 챌린지가 없어요. 오픈된 챌린지를 구경해보세요!</p>
        <router-link class="go-home" to="/">이동하기</router-link>
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
  margin: 30px 0 0 0;
}
.box {
  background-color: white;
  border-radius: 10px;
  width: 90%;
  height: 120px;
  margin: 30px 0 20px 50px;
  padding: 15px;
  box-shadow: 5px 5px 10px -5px;
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
