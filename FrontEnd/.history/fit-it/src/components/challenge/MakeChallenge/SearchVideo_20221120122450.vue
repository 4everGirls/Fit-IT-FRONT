<template>
  <div class="container">
    <div class="flex-container">
      <div class="flex-item">
        <h3 class="title">당신만의 챌린지를 만들어 보세요!</h3>
      </div>
      <div class="searchContainer flex-item">
        <div class="col">
          <form class="d-flex col-md-6" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="검색어를 입력하세요."
              aria-label="Search"
              size="40"
              v-on:keydown.enter.prevent="search"
              v-model="keyword"
            />
          </form>
          <div class="col-md-4">
            <button class="btn btn-primary" type="submit" @click="search">
              검색
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchVideo",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      if (this.keyword !== "") {
        let value = this.keyword && this.keyword.trim();
        this.$store.dispatch("searchVideo", value);
        this.clearInput();
      } else {
        alert("검색어를 입력하세요.");
      }
    },
    clearInput() {
      this.keyword = "";
    },
  },
};
</script>

<style scoped>
.title {
  margin: 30px;
  color: indigo;
  font-weight: 350;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.searchContainer {
}
</style>
