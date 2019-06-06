<template>
<v-app dark>
<v-toolbar
  app
  scroll-off-screen
  color="transparent"
  flat
>
    <v-toolbar-side-icon exact :to="$i18n.path('')" nuxt><v-img lazy-src="/monogram/monogram.ico" src="/monogram/128/monogram.png"></v-img></v-toolbar-side-icon>
    <v-toolbar-title class="title green--text">{{$t('name')}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
              v-for="item in menu"
              :key="item.title"
              color="green"
              exact
             :to="$i18n.path(`${item.link}`)"
              nuxt
              flat
      >{{$t(item.title)}}</v-btn>

        <v-menu bottom origin="center center" transition="slide-y-transition" offset-y>
            <v-btn slot="activator" icon>
                <v-icon class="flag-language flag-icon">{{ `flag-icon-${$i18n.locale}` }}</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile v-for="item in $store.state.locales" :key="item" @click="setLocale(item)">
                    <v-list-tile-title class="green--text">
                      <v-icon class="flag-language flag-icon">{{ `flag-icon-${item}` }}</v-icon> {{item.toUpperCase()}}
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

    </v-toolbar-items>
    <v-toolbar-side-icon @click="navigation = !navigation" class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
    <v-navigation-drawer
            app
            disable-resize-watcher
            v-model="navigation"
    ></v-navigation-drawer>
  <v-content>
    <v-container fluid fill-height>
      <Nuxt />
    </v-container>
  </v-content>
</v-app>
</template>

<script>
export default {
    data(){
        return {
            navigation:false,
            menu:[
                {link:'',title:'menu.home'},
                {link:'projects',title:'menu.projects'},
                {link:'blog',title:'menu.blog'},
                {link:'about',title:'menu.about'},
                {link:'contact',title:'menu.contact'},
            ]
        }
    },
    computed:{},
    methods:{
        setLocale(lang){
            // this.$i18n.locale = lang
            document.cookie = `locale=${lang}`;
            location.reload()
            // if(lang === 'en'){
            //     this.$router.push({
            //         path: this.$route.fullPath.replace(/^\/[^\/]+/, '')
            //     })
            //     return
            // }
            // console.log(this.$route.fullPath)
            // this.$router.push({
            //     path: `/${lang}${this.$route.fullPath.replace(/^\/[^\/]+/, '')}`
            // })
        }
    }
}
</script>

<style>
#app{
  background: linear-gradient(110deg, #111 50%, #222 80%);
}

</style>
