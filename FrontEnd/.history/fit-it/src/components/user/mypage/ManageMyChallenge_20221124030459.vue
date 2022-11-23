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
        <div class="card" style="width: 14rem">
          <div class="card-body">
            <h5 class="card-title mb-3 text-truncate mb-1">
              {{ mychallenge.challengeName }}
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              <i class="bi bi-people-fill"></i> 몇명참여했는지 나중에 넣자
            </h6>
            <p class="card-text" id="date">
              {{ mychallenge.startDate }} ~ {{ mychallenge.startDate }}
            </p>
            <p class="card-text text-truncat">
              {{ mychallenge.challengeContent }}
            </p>

            <button
              class="btn btn-primary delete-btn"
              @click="deleteChallenge(mychallenge.challengeNo)"
            >
              삭제
            </button>
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
    ...mapState(["loginUser", "mymakechallenges"]),
  },
  created() {
    this.$store.dispatch("getMyChallenges", this.loginUser.userNo);
  },
  methods: {
    deleteChallenge(challengeNo) {
      var result = confirm("정말로 삭제하시겠습니까?");
      if (result) {
        this.$store.dispatch("deleteMyMakeChallenge", challengeNo);
      }
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
}
.card {
  border-line
}
</style>
