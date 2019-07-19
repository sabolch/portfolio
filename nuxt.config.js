// import plugins
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
// .env variables
const env = require('dotenv').config()

export default {
    mode: 'universal',
    srcDir: __dirname,
    env: env.parsed,

    /*
    ** Headers of the page
    */
    head: {
        title: 'Vargha Sabolch',
        titleTemplate: '%s - ' + 'Vargha Sabolch',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'mobile-web-app-capable', content: 'yes'},
            {hid: 'description', name: 'description', content: 'Vargha Sabolch portfolio page'},
            {name: 'google-site-verification', content: 'vpDSwoiZLVd07OXTwgNpOvmEEIlCD0tl-GdMFoQgqf4'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/monogram/monogram.ico'},
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

    loading: {color: 'green'},

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
        {src: '~/plugins/vue2-gmaps.js', ssr: true}
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        //  ['@nuxtjs/dotenv'],
        ['@nuxtjs/sitemap',
            {
                hostname: env.HOST_ADDRESS,
                gzip: true,
                exclude: [
                    '/admin/**'
                ],
                defaults: {
                    changefreq: 'daily',
                    priority: 1
                }
            }
        ],
        ['@nuxtjs/google-analytics', {id: 'UA-131722076-2'}],
        ['@nuxtjs/google-tag-manager', {
            id: 'GTM-PSKN93M'
        }],

        ['@nuxtjs/recaptcha', {
            /* reCAPTCHA options */
            hideBadge: true,
            siteKey: process.env.RECAPTCHA_API_KEY,
            version: 3
        }],
        [
            'nuxt-fire',
            {
                useOnly: ['auth', 'firestore', 'functions', 'realtimeDb'],
                customEnv: false,
                functionsLocation: 'us-central1',
                config: {
                    development: {
                        apiKey: process.env.FIREBASE_API_KEY,
                        authDomain: process.env.FIREBASE_DOMAIN,
                        databaseURL: process.env.FIREBASE_URL,
                        projectId: process.env.FIREBASE_PROJECT_ID,
                        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
                    },

                    production: {
                        apiKey: process.env.FIREBASE_API_KEY,
                        authDomain: process.env.FIREBASE_DOMAIN,
                        databaseURL: process.env.FIREBASE_URL,
                        projectId: process.env.FIREBASE_PROJECT_ID,
                        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
                    }
                }
            }
        ]
    ],

    // multilanguage support in router
    router: {
        middleware: 'i18n'
    },

    generate: {
        routes: ['/', '/about', '/hu', '/hu/about', '/ua', '/ua/about']
    },

    /*
    ** Build configuration
    */

    build: {
        transpile: [/^vue2-google-maps($|\/)/, 'vuetify/lib'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
            stylus: {
                import: ['~assets/style/variables.styl']
            }
        },
        /*
        ** You can extend webpack config here
        */
        // Debug options
        //  extend(config, ctx) {
        //  if (ctx.isDev) {
        //    config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
        //  }
        // }
    }
}
