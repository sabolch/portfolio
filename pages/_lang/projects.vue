<template>
    <v-layout row wrap justify-center>
        <v-flex xs12 md6 class="pa-2">
            <v-card hover ripple>
                <v-card-title primary-title class="pa-3">
                    <h1>Transcarpathian tours</h1>
                </v-card-title>
                <v-img
                        lazy-src='/projects/zakarpattour_lazy.jpg'
                        src='/projects/zakarpattour.jpg'
                >
                </v-img>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 class="pa-2">
            <v-card hover ripple>
                <v-card-title primary-title class="pa-3">
                    <h1>Three.js Aviator Game</h1>
                </v-card-title>
                <v-img
                        src='/projects/game.jpg'
                        lazy-src='/projects/game_lazy.jpg'
                >
                </v-img>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        head() {
            return {title: this.$t('menu.projects')}
        },
        data() {
            return {
                writeSuccessful: false
            }
        },
    }
</script>

<style scoped>
    .img-max {
        max-width: 100%;
    }
</style>
