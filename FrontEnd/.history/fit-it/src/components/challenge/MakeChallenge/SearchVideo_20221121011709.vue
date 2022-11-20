<template>
  <div class="container">
    <div class="flex-container mb-5">
      <div class="flex-item">
        <h3 class="title">당신만의 챌린지를 만들어 보세요!</h3>
      </div>
      <div class="flex-item">
        <div class="row">
          <div class="col-3"></div>
          <div class="col">
            <form class="d-flex col" role="search">
              <!-- 엔터 부분 다시 보기 -->
              <!--다시다시다시다시-->
              <input
              class="form-control me-1"
              placeholder="검색어를 입력하세요."
                aria-label="Search"
                size="70"
                @keypress.enter="search"
                v-model="keyword"
                />
              </form>
          </div>
          <div class="col">
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
</style>
