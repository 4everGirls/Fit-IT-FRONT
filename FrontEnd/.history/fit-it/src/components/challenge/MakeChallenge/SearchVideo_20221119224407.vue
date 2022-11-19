<template>
  <div class="container">
    <div class="flex">
        <h3 class="title">당신만의 챌린지를 만들어 보세요!</h3>
        <input type="text" v-model="keyword" placeholder="">
    </div>
  </div>
</template>

<script>
export default {
    name: "SearchVideo",
}
</script>

<style scoped>
.title {
    margin: 30px;
    color: indigo;
    font-weight: 350;
}
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>