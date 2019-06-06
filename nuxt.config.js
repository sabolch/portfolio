import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',

  env:{
    apiUrl: 'http://localhost:8000',
    appName: 'Vargha Sabolch',
    appLocale: 'en',
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Vargha Sabolch',
    titleTemplate: '%s - ' + 'Vargha Sabolch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name: 'mobile-web-app-capable', content: 'yes'},
      {hid: 'description', name: 'description', content: 'Vargha Sabolch portfolio page'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/monogram/monogram.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */

  loading: { color: 'green' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    'assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/i18n.js',
    { src: '~/plugins/vue2-gmaps.js', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
 modules: [
   ['@nuxtjs/recaptcha', {
     /* reCAPTCHA options */
     hideBadge: true,
     siteKey: '6Ld8hacUAAAAAEURk4TcbZhfWQn2sQabwkupF08s',
     version: 3
   }],
  [
    'nuxt-fire',
    {
      useOnly: ['auth','firestore','functions','realtimeDb'],
      customEnv: false,
      functionsLocation: 'us-central1',
      config: {
        development: {
          apiKey: "AIzaSyAUVvGTXU6leGWe9oKUDobzQELJaDfM1r0",
          authDomain: "vportfolio-3209d.firebaseapp.com",
          databaseURL: "https://vportfolio-3209d.firebaseio.com",
          projectId: "vportfolio-3209d",
          storageBucket: "vportfolio-3209d.appspot.com",
          messagingSenderId: "683716865547",
        },
        production: {
          apiKey: "AIzaSyAUVvGTXU6leGWe9oKUDobzQELJaDfM1r0",
          authDomain: "vportfolio-3209d.firebaseapp.com",
          databaseURL: "https://vportfolio-3209d.firebaseio.com",
          projectId: "vportfolio-3209d",
          storageBucket: "vportfolio-3209d.appspot.com",
          messagingSenderId: "683716865547",
        }
      }
    }
  ]
],

  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vue2-google-maps($|\/)/,'vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
