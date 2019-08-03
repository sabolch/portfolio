<template>
  <v-layout row wrap justify-center class="pa-4">
    <v-flex xs12 md6 class="pa-3" v-for="project in projects" :key="project.img">
      <v-card hover ripple :href="project.git" target="_blank">
        <v-card-title primary-title class="pa-3">
          <h1>{{project.title}}</h1>
        </v-card-title>
        <v-img :lazy-src="`/projects/${project.lazy_img}`" :src="`/projects/${project.img}`"></v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return { title: this.$t("menu.projects") };
  },
  data() {
    return {
      projects: [
        { title: "Transcarpathian tours", img: "zakarpattour.jpg", lazy_img: "zakarpattour_lazy.jpg", git:'https://github.com/VarghaSabee/zakarpattour' },
        { title: "Three.js Aviator Game", img: "game.jpg", lazy_img: "game_lazy.jpg", git:'https://github.com/VarghaSabee/games-threejs' },
        { title: "Bus ticket", img: "autobase.jpg", lazy_img: "autobase_lazy.jpg", git:'https://github.com/VarghaSabee/autobase' },
        { title: "SabAds (Online Exchange)", img: "ads.jpg", lazy_img: "ads_lazy.jpg", git:'https://github.com/VarghaSabee/sabAds' },
        { title: "Simple T-Shirt designer", img: "t_shirt.jpg", lazy_img: "t_shirt_lazy.jpg", git:'https://github.com/VarghaSabee/t-shirt_designer' }
      ]

    };
  }
};
</script>

<style scoped>
.img-max {
  max-width: 100%;
}
</style>
