<template>
    <div>
        <my-challenge></my-challenge>
        <h2>여기</h2>
        <button class="btn btn-primary">
            <router-link to="/makeChallenge" class="challengeBtn">챌린지 만들기</router-link>
        </button>
        <open-challenge></open-challenge>
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