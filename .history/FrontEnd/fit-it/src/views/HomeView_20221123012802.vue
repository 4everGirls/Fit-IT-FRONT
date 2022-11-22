<template>
    <div>
        <div id="banner">
            <div id="carouselExampleCaptions" class="carousel slide border-bottom border-1 pb-3" data-bs-ride="carousel">
                     <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        
                     </div>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <img id="carousel-item-img" src="@/assets/img/banner1.jpg" class="d-block w-100 img-fluid">
                        </div>
                        <div class="carousel-item">
                           <img id="carousel-item-img" src="@/assets/img/banner2.jpg" class="d-block w-100 img-fluid">
                        </div>

                     </div>
                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                     </button>
                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                     </button>
            </div>
        </div>
        <div class="row">
            <div class="row">
                
                <my-challenge></my-challenge>
            </div>
            <button class="btn btn-primary">
                <router-link to="/makeChallenge" class="challengeBtn">챌린지 만들기</router-link>
            </button>
            <open-challenge></open-challenge>
        </div>
    </div>
</template>

<script>
import OpenChallenge from '@/components/challenge/OpenChallenge.vue';
import MyChallenge from '@/components/challenge/MyChallenge.vue';

export default {
    name: "HomeView",
    components: {
        OpenChallenge,
        MyChallenge,
    }
}
</script>

<style scoped>
.challengeBtn {
    color: white;
    text-decoration: none;
}
</style>