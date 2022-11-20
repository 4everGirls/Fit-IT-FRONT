<template>
<div class="result-container">
  <div class="card text-center">
    <div class="card-title">
      <input type="text" placeholder="이름을 입력하세요." />
    </div>
    <div class="card-body">
      <p class="card-text"></p>
      <button class="btn btn-primary" @click="makeChallenge">만들기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistChallengeForm",
  methods: {
    makeChallenge() {},
  },
};
</script>

<style scoped></style>
