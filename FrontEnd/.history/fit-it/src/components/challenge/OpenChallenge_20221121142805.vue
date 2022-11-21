<template>
    <div>
        <h2>오픈된 챌린지</h2>
        <div>
            <li
                v-for="(challengeNo, index) in challengeList"
                :key="""index"
            >
            리스트
            </li>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "OpenChallenge",
    computed: {
        ...mapState(["challengeList"]),
    },
}
</script>

<style>

</style>