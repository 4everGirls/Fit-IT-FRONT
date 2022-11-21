<template>
    <div>
        <h1 class="title">오픈된 챌린지</h1>
        <div>
        <li v-for="(challenge, index) in challengeList" :key="index">
            <div class="row mt-4 ms-2" id="box">
            <form>
                <div class="row m-3">
                <input
                class="form-control"
                type="text"
                placeholder="챌린지 이름을 입력하세요."
                v-model="challengeName"
                />
            </div>
            
            <div class="row m-3">
            <label 
                class="form-label" 
            for="challengeContent"
            placeholder="챌린지 설명을 적어주세요."
                >어떤 챌린지인가요?</label
          >
          <textarea
            class="form-control"
            id="challengeContent"
            rows="3"
            v-model="challengeContent"
          ></textarea>
        </div>
      </form>
      <div class="row me-5">
        <button class="btn btn-primary" @click="makeChallenge">만들기</button>
      </div>
        </li>
    </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "OpenChallenge",
    computed: {
        ...mapState(["challengeList"]),
    },
};
</script>

<style>
.title {
    color: indigo;
    font-weight: 800;
}
</style>
