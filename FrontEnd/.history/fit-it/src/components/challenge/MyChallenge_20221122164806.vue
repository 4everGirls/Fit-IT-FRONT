<template>
    <div class="container">
        <h1 class="title">마이 챌린지</h1>
            <li v-for="(mychallenge, index) in myjoinchallenges" :key="index">
                <router-link to="/doChallenge">챌린지 수행페이지로 이동</router-link>
            </li>
    </div>
    
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "MyChallenge",
    computed: {
        ...mapState(["myjoinchallenges"]),
        
    }

}
</script>

<style scoped>
.title {
    color: indigo;
    font-weight: 800;
}
</style>