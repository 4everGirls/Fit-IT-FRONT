<template>
  <div class="result-container">
    <h1>안녕</h1>

    <!--Pagination-->
    <footer>
        <ul class="pagination">
            <li class="page-item disabled">
                <span class="page-link">이전</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active" aria-current="page">
                <span class="page-link">2</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">다음</a>
            </li>
        </ul>
    </footer>
  </div>
</template>

<script>
export default {
    name: "SearchResult",

}
</script>

<style>

</style>