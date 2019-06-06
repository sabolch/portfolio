<template>
    <v-layout align-center justify-center row wrap fill-height>
        <v-flex xs12 md6 class="text-xs-center pa-2">
            <v-card>
                <v-form>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 class="text-xs-justify">
                            <h1 :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-3']" class="green--text font-weight-bold ma-4">Contact me</h1>
                            <h1 class="subheading green--text ma-4">If you have any questions please don't hesitate to contact me ..</h1>
                        </v-flex>
                        <v-flex xs12 md6 class="pa-2">
                            <v-text-field
                                    box
                                    color="green"
                                    label="Name"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6 class="pa-2">
                            <v-text-field
                                    box
                                    color="green"
                                    label="E-mail"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 class="pa-2">
                            <v-text-field
                                    box
                                    color="green"
                                    label="Subject"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 class="pa-2">
                            <v-textarea
                                    box
                                    color="green"
                                    label="Message"
                            ></v-textarea>
                        </v-flex>
                        <v-flex xs12 class="text-xs-right">
                            <recaptcha/>
                            <v-btn
                                    outline
                                    large
                                    color="green"
                            >Send</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
                </v-form>
            </v-card>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-center pa-2">
                <GmapMap
                        :center="center"
                        :zoom="7"
                        ref="mapRef"
                        map-type-id="terrain"
                        style="width: 100%;  height: 640px"
                        :options="options"
                >
                    <GmapMarker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            icon="/marker.png"
                            :clickable="true"
                            :draggable="false"
                            @click="panToCenter()"
                    />
                </GmapMap>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        head() {
            return { title: this.$t('menu.contact') }
        },
        data(){
            return {
                markers:[
                    {position:{lat:48.61667, lng: 22.3}}
                ],
                center:{lat:48.61667, lng: 22.3},
                options:{
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    disableDefaultUi: false,
                    styles: [
                        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                        {elementType: 'labels.text.fill', stylers: [{color: '#22dd63'}]},
                        {
                            featureType: 'administrative.locality',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#22dd63'}]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#22dd63'}]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'geometry',
                            stylers: [{color: '#263c3f'}]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#22dd63'}]
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry',
                            stylers: [{color: '#38414e'}]
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#22aa53'}]
                        },
                        {
                            featureType: 'road',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#22dd63'}]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry',
                            stylers: [{color: '#22aa53'}]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#22aa53'}]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#22ff63'}]
                        },
                        {
                            featureType: 'transit',
                            elementType: 'geometry',
                            stylers: [{color: '#22dd63'}]
                        },
                        {
                            featureType: 'transit.station',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#22dd63'}]
                        },
                        {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [{color: '#17263c'}]
                        },
                        {
                            featureType: 'water',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#515c6d'}]
                        },
                        {
                            featureType: 'water',
                            elementType: 'labels.text.stroke',
                            stylers: [{color: '#17263c'}]
                        }
                    ]
                }
            }
        },
        methods:{
            panToCenter(){
                this.$refs.mapRef.$mapPromise.then((map) => {
                    map.panTo(this.center);
                    map.setZoom(7)
                })
            }
        }
    }
</script>

<style scoped>

</style>
