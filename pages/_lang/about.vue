<template>
    <v-layout row wrap justify-center>
        <v-flex xs12 md6 class="text-xs-center">
            <v-avatar
                    size="200"
                    class="pb-4"
            >
                <img src="/profile_256x256.jpg" alt="avatar">
            </v-avatar>
            <h1 v-for="(x,i) in $t('about.text')" :key="i" class="title text-xs-justify pa-2 green--text about-text">
              {{x}}
            </h1>
        </v-flex>
        <v-flex xs9 class="text-xs-center pa-4">
            <h1 class="display-1 font-weight-bold green--text pa-4">{{$t('about.skills')}}</h1>
            <v-container fluid>
                <v-layout row wrap class="text-xs-center">
                    <v-flex
                            xs12 sm6 md3
                            v-for="item in skills"
                            :key="item.title"
                            class="text-xs-center pt-4 pb-4">
                        <v-progress-circular
                                :rotate="90"
                                :size="100"
                                :width="15"
                                :value="item.value"
                                :color="item.color"
                                class="font-weight-bold pt-4"
                        >
                            {{item.value}}
                        </v-progress-circular>
                        <h1 class="title font-weight-bold pt-3" :class="[`${item.color}--text`]">{{item.title}}</h1>
                    </v-flex>
                </v-layout>
            </v-container>
            <h1 class="display-1 font-weight-bold green--text pa-4">{{$t('about.techs')}}</h1>
            <v-container fluid class="">
                <v-layout row wrap class="text-xs-center">
                    <v-flex
                            xs12 sm6 md3
                            v-for="item in techs"
                            :key="item.title"
                            class="text-xs-center pt-4 pb-4">
                       <v-avatar class="pt-4" size="100">
                           <v-img :src="item.img"></v-img>
                       </v-avatar>
                        <h1 class="pt-4 pb-4 title font-weight-bold" :class="[`${item.color}--text`]">{{item.title}}</h1>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
        <v-flex xs12 class="text-xs-center">
            <v-btn icon
                   large
                   to="/"
                   color="light-blue"
            >
                <v-icon>
                    mdi-twitter
                </v-icon>
            </v-btn>
            <v-btn icon
                   large
                   color="blue darken-4"
                   target="_blank"
                   href="https://www.facebook.com/szabolcs.vargha"
            >
                <v-icon>
                    mdi-facebook
                </v-icon>
            </v-btn>
            <v-btn icon
                   large
                   target="_blank"
                   href="https://www.linkedin.com/in/sabolch-vargha"
                   color="light-blue darken-3"
            >
                <v-icon>
                    mdi-linkedin
                </v-icon>
            </v-btn>
            <v-btn icon
                   large
                   target="_blank"
                   href="https://stackoverflow.com/cv/vargha.sabolch"
                   color="orange darken-4"
            >
                <v-icon>
                    mdi-stack-overflow
                </v-icon>
            </v-btn>
            <v-btn icon
                   large
                   target="_blank"
                   href="https://github.com/VarghaSabee"
                   color="purple darken-4"
            >
                <v-icon>
                    mdi-github-circle
                </v-icon>
            </v-btn>
            <v-btn icon
                   large
                   href="skype:vargha.sabolch?userinfo"
                   color="light-blue"
            >
                <v-icon>
                    mdi-skype
                </v-icon>
            </v-btn>
        </v-flex>
    </v-layout>
</template>
<script>

    export default {
        head() {
            return {title: this.$t('menu.about')}
        },
        data() {
            return {
                skills:[
                    {value:85, color:'primary',title:'HTML/CSS3'},
                    {value:85, color:'yellow',title:'Bootstrap'},
                    {value:80, color:'blue',title:'Vue.js'},
                    {value:80, color:'purple',title:'Vuetify'},
                    {value:75, color:'amber',title:'JQuery'},
                    {value:75, color:'red',title:'PHP'},
                    {value:70, color:'pink',title:'Laravel'},
                    {value:70, color:'lime',title:'Nuxt.js'},
                ],
                techs:[
                    {value:85, color:'white',title:'Git',img:'/skills/git.png'},
                    {value:85, color:'amber',title:'MySQL',img:'/skills/mysql.png'},
                    {value:85, color:'red',title:'MS SQL',img:'/skills/mssql.jpg'},
                    {value:85, color:'green',title:'MongoDB',img:'/skills/mongodb.png'},
                    {value:85, color:'primary',title:'Java',img:'/skills/java.png'},
                    {value:85, color:'purple',title:'C#',img:'/skills/csharp.jpg'},
                    {value:85, color:'yellow',title:'Python',img:'/skills/python.png'},
                    {value:85, color:'primary',title:'Three.js',img:'/skills/threejs.jpg'},
                ]

            }
        }
    }
</script>
