<template>
  <div class="container">
    <div class="flex row">
        <h3 class="title">당신만의 챌린지를 만들어 보세요!</h3>
        <span class="searchContainer" @click="search">
            <input type="text" v-model="keyword" placeholder="원하는 영상을 검색하세요!" @keyup.enter="search">
        </span>
    </div>
  </div>
</template>

<script>
export default {
    name: "SearchVideo",
    data() {
        return {
            keyword: '',
        }
    },
    methods: {
        search() {
            this.$store.dispatch("searchYoutube", this.keyword);
        },
    }
}
</script>

<style scoped>
.title {
    margin: 30px;
    color: indigo;
    font-weight: 350;
}
.flex : {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>