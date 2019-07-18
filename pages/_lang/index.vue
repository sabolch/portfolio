<template>
  <v-layout align-center justify-center row wrap fill-height>
    <v-flex md6 class="text-xs-center">
        <v-img
                class="img-center"
                height="256"
                width="256"
                lazy-src="/monogram/monogram.ico"
                src="/monogram/256/monogram.png"
                aspect-ratio="1"
        ></v-img>
        <h1
                :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-3']"
                class="ma-2 font-weight-bold green--text"
        >{{$t('index.title')}}</h1>
        <h4 class="subtitle ma-4 green--text">{{$t('index.subtitle')}}</h4>
      <v-btn
      large
      outline
      color="primary"
      :href="gDocsUrl"
      target="_blank"
      >{{$t('btn.website')}}</v-btn>
            <v-btn
      outline
      large
      :to="$i18n.path('contact')"
      color="green"
      >{{$t('btn.hire')}}</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>

export default {
  head() {
    return { title: this.$t('menu.home') }
  },
  data() {
      return {

      }
    },
    computed:{
      gDocsUrl(){
          return process.env.G_DOCS_URL
      }
    }
}
</script>
<style>

</style>
