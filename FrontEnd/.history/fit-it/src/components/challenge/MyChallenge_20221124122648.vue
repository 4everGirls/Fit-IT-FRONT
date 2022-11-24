<template>
  <div>
    <h1 class="title">마이 챌린지</h1>
    <div v-if="isNotEmpty">
      <!--메인 페이지에서는 최대 3개까지만 보이고, 더 보고 싶으면 전체보기로 이동 -->
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
                    <div class="col">
                      <div class="challenge-title">
                        {{ mychallenge.challengeName }}
                      </div>
                      <p class="challenge-period">
                        {{ mychallenge.startDate }} ~ {{ mychallenge.endDate }}
                      </p>
                    </div>
                    <div class="col"></div>
                    <div class="col"></div>
                    <!--참여중 / 완료 이미지-->
                    <div v-if="myjoinchallenges.isComplete === 'Y'">
                      <img
                        src="@/assets/img/check-mark.png"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div v-else>
                      <img
                        src="@/assets/img/loading.png"
                        width="50"
                        height="50"
                      />
                    </div>
                    <!--참여중 / 완료 버튼-->
                    <div class="col">
                      <button class="btn btn-primary btn-lg">이어하기</button>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyChallenge",
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
  font-size: 50px;
  margin: 50px 0 20px 50px;
}
.box {
  background-color: white;
  border-radius: 10px;
  width: 90%;
  margin: 50px 0 50px 50px;
  padding: 20px;
}
.myjoin-container {
  text-decoration: none;
  color: rgb(0, 12, 22);
}
.challenge-title {
  font-size: 25px;
  font-weight: 800;
  color: indigo;
}
.challenge-period {
  color: rgb(117, 117, 117);
  margin: 10px 0 20px 0;
}
.all-joins {
  color: indigo;
  margin: 0 70px 0 0;
}
.btn {
  margin: 0 10px 20px 0;
  float: right;
}
</style>
