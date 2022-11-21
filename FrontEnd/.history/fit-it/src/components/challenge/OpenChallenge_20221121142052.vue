<template>
    <div>
        <h2>오픈된 챌린지</h2>
        <div>
            <li
                v-for="(challengeNo, index) in challengeList"
            >
            리스트
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "OpenChallenge",
    computed: {

    }
}
</script>

<style>

</style>