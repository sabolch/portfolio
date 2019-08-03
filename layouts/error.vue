<template>
    <v-layout row wrap justify-center align-center>
        <v-img
                class="error-img"
                src="/404.png"
                lazy-src="/404_lazy.png"
        ></v-img>
    </v-layout>
</template>

<script>
    export default {
        name: "error.vue",
        head() {
            return {title: 'Oops ..'}
        },
    }
</script>

<style scoped>
    .error-img {
        max-width: 500px;
    }
</style>
