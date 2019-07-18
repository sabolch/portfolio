<template>
    <v-layout align-center justify-center row wrap fill-height>
        <v-flex xs12 md6 class="text-xs-center">
            <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
            >
                <v-layout row wrap class="ma-4">
                    <v-flex xs12 class="text-xs-justify">
                        <h1 :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-3']"
                            class="green--text font-weight-bold ma-4">
                            {{$t('contact.title')}}
                        </h1>
                        <h1 class="subheading green--text ma-4">
                            {{$t('contact.subtitle')}}
                        </h1>
                    </v-flex>
                    <v-flex xs12 md6 class="pl-2 pr-2">
                        <v-text-field
                                box
                                v-model="form.name"
                                :counter="10"
                                :rules="nameRules"
                                color="green"
                                :label="$t('contact.form.name')"
                                required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6 class="pl-2 pr-2">
                        <v-text-field
                                box
                                v-model="form.email"
                                :rules="emailRules"
                                color="green"
                                :label="$t('contact.form.email')"
                                required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 class="pl-2 pr-2">
                        <v-text-field
                                box
                                :rules="subjectRules"
                                v-model="form.subject"
                                color="green"
                                :label="$t('contact.form.subject')"
                                counter
                                required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 class="pl-2 pr-2">
                        <v-textarea
                                box
                                v-model="form.message"
                                color="green"
                                :label="$t('contact.form.message')"
                                :rules="messageRules"
                                counter
                                required
                        ></v-textarea>
                    </v-flex>
                    <v-flex xs12 class="text-xs-right pl-2 pr-2">
                        <recaptcha/>
                        <v-btn
                                outline
                                large
                                color="green"
                                @click="sendMessage"
                                :disabled="!valid"
                                :loading="loading"
                        >
                            {{$t('btn.send')}}
                            <v-icon right dark>send</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-form>
        </v-flex>
        <v-flex xs12 md6>
            <GmapMap
                    :center="center"
                    :zoom="7"
                    ref="mapRef"
                    map-type-id="terrain"
                    style="width: 100%;  height: 600px"
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

        <v-snackbar
                v-model="snackbar.active"
                bottom
                right
                :color="snackbar.color"
                :timeout="snackbar.timeout"
        >
            {{ snackbar.text }}
            <v-btn
                    dark
                    color="orange"
                    flat
                    @click="snackbar.active = false"
            >
                {{$t('btn.close')}}
            </v-btn>
        </v-snackbar>
    </v-layout>
</template>
<script>
    export default {
        head() {
            return {title: this.$t('menu.contact')}
        },
        data() {
            return {
                markers: [
                    {position: {lat: 48.61667, lng: 22.3}}
                ],
                center: {lat: 48.61667, lng: 22.3},
                options: {
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
                            stylers: [{color: '#22aa63'}]
                        },
                        {
                            featureType: 'administrative.country',
                            elementType: 'geometry.stroke',
                            stylers: [{'color': '#229934'}]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#22aa63'}]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'geometry',
                            stylers: [{color: '#263c3f'}]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#22aa33'}]
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
                },
                valid: true,
                loading: false,
                form: {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                },
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid'
                ],
                subjectRules: [
                    v => !!v || 'Subject is required',
                    v => (v && v.length >= 5) || 'Subject must be greater than 5 characters'
                ],
                messageRules: [
                    v => !!v || 'Message is required',
                    v => (v && v.length >= 10) || 'Message must be greater than 10 characters'
                ],
                snackbar: {
                    active: false,
                    timeout: 4000,
                    text: '',
                    color: 'success'
                }
            }
        },
        mounted() {
            // this.$refs.mapRef.$mapPromise.then((map) => {
            //     map.panTo(this.markers.position)
            // })
        },
        methods: {
            panToCenter() {
                this.$refs.mapRef.$mapPromise.then((map) => {
                    map.panTo(this.center);
                    map.setZoom(7)
                })
            },
            async sendMessage() {
                if (this.$refs.form.validate()) {
                    this.loading = true
                    const messageRef = this.$fireStore.collection('message').doc('messages')
                    await messageRef.set({
                        message: this.form
                    }).then(res => {
                        // success
                        this.snackbar.color = 'success'
                        this.snackbar.active = true
                        this.snackbar.text = this.$t('snackbar.success')
                    }).catch(e => {
                        // error
                        this.snackbar.color = 'error'
                        this.snackbar.active = true
                        this.snackbar.text = this.$t('snackbar.error')
                    }).then(res => {
                        // finally in Edge not work using .then()
                        this.$refs.form.reset()
                        this.loading = false
                    })
                }
            }
        }
    }
</script>
