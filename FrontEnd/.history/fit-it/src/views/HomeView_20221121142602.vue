<template>
    <div>
        <h2>여기는 홈</h2>
        <my-challenge></my-challenge>
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