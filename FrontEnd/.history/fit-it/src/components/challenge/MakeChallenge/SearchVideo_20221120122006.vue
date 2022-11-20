<template>
  <div class="container">
    <div class="flex-container">
      <div class="flex-item">
        <h3 class="title">당신만의 챌린지를 만들어 보세요!</h3>
      </div>
      <div class="searchContainer flex-item">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="당신의 동영상을 검색해보세요!"
            aria-label="Search"
            size="40"
            v-on:keydown.enter.prevent='search'
            v-model="keyword"
          />
        </form>
        <button class="btn btn-primary" type="submit" @click="search">
          검색
        </button>
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
      if(this.keyword !== "") {
        let value = this.keyword && this.keyword.trim();
        this.$store.dispatch("searchVideo", value);
        this.clearInput();
      } else {
        alert('검색어를 입력하세요.')
      }
    },
    addTodo() {
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
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
