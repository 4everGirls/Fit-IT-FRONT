<template>
    <div>
        <h1 class="title">오픈된 챌린지</h1>
        <div>
        <li v-for="(challenge, index) in challengeList" :key="index">
            <div class="box">
                <p>{{challenge.challengeName}}</p>
            </div>
        </li>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "OpenChallenge",
    computed: {
        ...mapState(["challengeList"]),
    },
};
</script>

<style>
.title {
    color: indigo;
    font-weight: 800;
}
.box {
    background-color: rgb(234, 234, 234);
    border-radius: 10px;
    width: 300px;
    height: 300px;
    margin: 50px;
    padding: 10px;
}
</style>
