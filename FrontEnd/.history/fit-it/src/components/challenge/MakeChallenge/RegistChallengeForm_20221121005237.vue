<template>
  <div class="result-container text-center">
     <div class="row mt-4 ms-2">
        <form>
          
          <div id="box" >
            <div class="card-title">
              <input type="text" placeholder="챌린지 이름을 입력하세요." />
            </div>
            <div class="card-body">
              <p class="card-text"></p>
              <button class="btn btn-primary" @click="makeChallenge">만들기</button>
            </div>
          </div>
        
        </form>
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
