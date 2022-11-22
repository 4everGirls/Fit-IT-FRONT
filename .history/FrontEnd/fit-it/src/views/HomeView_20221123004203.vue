<template>
    <div>
        <h2>여기는 홈</h2>
        <hr>
        <my-challenge></my-challenge>
        <open-challenge></open-challenge>
        <button class="btn btn-primary">
            <router-link to="/makeChallenge">챌린지 만들기</router-link>
        </button>
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

<style>

</style>