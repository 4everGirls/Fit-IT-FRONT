<template>
  <div class="result-container">
    <div class="row mt-4 ms-2" id="box">
      <form>
        <div class="row m-3">
          <input type="text" placeholder="챌린지 이름을 입력하세요." />
        </div>
        <div></div>
        <div>챌린지 내용 텍스트 에이리이아</div>
      </form>
      <div class="row me-5">
        <button class="btn btn-primary" @click="makeChallenge">만들기</button>
      </div>
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

<style scoped>
#box {
  background-color: rgb(234, 234, 234);
}
</style>
