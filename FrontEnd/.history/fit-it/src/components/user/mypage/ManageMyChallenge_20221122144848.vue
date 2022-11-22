<template>
  <div class="container">
    <h1 class="title">내 챌린지 관리하기</h1>
    <hr />
    <div class="row">
    <li class="col-3 m-4" v-for="(mychallengee, index) in mymakechallenges" :key="index">
      
      <div class="card" style="width: 14rem">
          
          <div class="card-body">
            <h5 class="card-title mb-3 text-truncate mb-1">{{ mychallengee.challengeName }}</h5>
            <h6 class="card-subtitle mb-2 text-muted"> <i class="bi bi-people-fill"></i> 몇명참여했는지 나중에 넣자</h6>
            <p class="card-text" id="date">{{ mychallengee.startDate }} ~ {{ mychallengee.startDate }}</p>
            <p class="card-text text-truncat">{{ mychallengee.challengeContent }} </p>
                        
            <button
            
              class="btn btn-primary"
              @click.once="
                deleteChallenge(mychallengee.challengeNo)
              "
            >
              삭제
            </button>
          </div>
      </div>
    </li>
    </div>
    <div class="row">
      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Managemychallengee",
  computed: {
    ...mapState(["loginUser", "mymakechallenges"]),
  },
  created() {
    this.$store.dispatch("getmychallengees", this.loginUser.userNo);
  },
  methods:{
    deleteChallenge(challengeNo){
      console.log(challengeNo)
    }
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
</style>
