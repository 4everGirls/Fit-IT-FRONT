<template>
  <div class="result-container">
    <form>
      <div class="row m-3">
        <input type="text" placeholder="챌린지 이름을 입력하세요." />
      </div>
      <div class="row m-3">날짜 선택</div>
      <div class="row m-3">선택된 날짜 보여주는곳</div>
      <div class="row m-3">챌린지 내용 텍스트 에이리이아</div>
    </form>
  </div>
</template>

<script>
export default {
    name: "VideoListFrom",
}
</script>

<style scoped>
.result-container {
    background-color: rgb(234, 234, 234);
    border-radius: 10px;
  }
</style>