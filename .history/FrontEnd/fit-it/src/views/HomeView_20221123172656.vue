<template>
  <div>
    <div id="banner">
      <div
        id="carouselExampleCaptions"
        class="carousel slide border-bottom border-1 pb-3"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              id="carousel-item-img"
              src="data:image/jpeg;base64,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"
              class="d-block w-100 img-fluid"
            />
          </div>
          <div class="carousel-item">
            <img
              id="carousel-item-img"
              src="@/assets/img/banner2.png"
              class="d-block w-100 img-fluid"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="row mt-1">
      <div class="row mt-3">
        <div class="col-1"></div>
        <div class="col">
          <my-challenge></my-challenge>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row mt-3">
        <div class="col-1"></div>
        <div class="col">
          <open-challenge></open-challenge>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import OpenChallenge from "@/components/challenge/OpenChallenge.vue";
import MyChallenge from "@/components/challenge/MyChallenge.vue";

export default {
  name: "HomeView",
  components: {
    OpenChallenge,
    MyChallenge,
  },
};
</script>

<style scoped></style>
