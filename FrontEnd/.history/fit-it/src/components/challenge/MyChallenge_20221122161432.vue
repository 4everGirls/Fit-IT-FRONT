<template>
    <div class="container">
        <h1 class="title">마이 챌린지</h1>
            <!-- <li v-for="(challenge, index) in myregistchallenges"> -->

            <!-- </li> -->
    </div>
    
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "MyChallenge",
    computed: {
        ...mapState(["myregistchallenges"]),
        
    }

}
</script>

<style scoped>
.title {
    color: indigo;
    font-weight: 800;
}
</style>