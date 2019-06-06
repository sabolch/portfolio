import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDBHjsOPGr5DFM4XdAwG4AL5E4caH1GG28',
        libraries: 'places', // This is required if you use the Autocomplete plugin
    }
})
