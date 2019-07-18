<template>
    <v-app dark>
        <v-toolbar
                app
                scroll-off-screen
                color="transparent"
                flat
        >
            <v-toolbar-side-icon exact active-class="" :to="$i18n.path('')" nuxt>
                <v-img lazy-src="/monogram/monogram.ico" src="/monogram/64/monogram.png"></v-img>
            </v-toolbar-side-icon>
            <v-toolbar-title class="title green--text">{{$t('name')}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                        v-for="item in menu"
                        :key="item.title"
                        color="green"
                        active-class="green--text orange--text"
                        exact
                        :to="$i18n.path(`${item.link}`)"
                        nuxt
                        flat
                >{{$t(item.title)}}
                </v-btn>

                <v-menu
                        transition="slide-y-transition"
                        bottom
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                                icon
                                v-on="on"
                        >
                            <v-icon class="flag-language flag-icon">{{ `flag-icon-${$i18n.locale}` }}</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-tile
                                v-for="item in $store.state.locales"
                                :key="item"
                                to=""
                                @click="setLocale(item)"
                        >
                            <v-list-tile-action>
                                <v-icon class="flag-icon">{{ `flag-icon-${item}` }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title> {{item.toUpperCase()}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            <v-toolbar-side-icon @click="navigation = !navigation"
                                 class="hidden-md-and-up green--text"></v-toolbar-side-icon>
        </v-toolbar>
        <v-navigation-drawer
                app
                clipped
                floating
                disable-resize-watcher
                v-model="navigation"
        >
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="/monogram/64/monogram.png">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title class="green--text">{{$t('name')}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-list dense>
                <v-divider></v-divider>
                <v-list-tile
                        v-for="item in menu"
                        :key="item.title"
                        :to="$i18n.path(`${item.link}`)"
                        class="green--text"
                        exact
                >
                    <v-list-tile-action>
                        <v-icon color="green">{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ $t(item.title) }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider></v-divider>

                <v-list-group
                        sub-group
                        no-action
                >
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title class="green--text">{{$t('languages')}}</v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon class="flag-icon">{{ `flag-icon-${$i18n.locale}` }}</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </template>
                    <v-list-tile
                            v-for="item in $store.state.locales"
                            :key="item"
                            to=""
                            @click="setLocale(item)"
                            class="green--text"
                            exact
                    >
                        <v-list-tile-action>
                            <v-icon class="flag-icon">{{ `flag-icon-${item}` }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title> {{item.toUpperCase()}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <v-container fluid fill-height>
                <Nuxt/>
                <under-dev/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import UnderDev from "../components/under-dev";

    export default {
        components: {UnderDev},
        data() {
            return {
                navigation: false,
                menu: [
                    {link: '', title: 'menu.home', icon: 'home'},
                    {link: 'projects', title: 'menu.projects', icon: 'apps'},
                    {link: 'blog', title: 'menu.blog', icon: 'message'},
                    {link: 'about', title: 'menu.about', icon: 'portrait'},
                    {link: 'contact', title: 'menu.contact', icon: 'contact_mail'},
                ]
            }
        },
        methods: {
            setLocale(lang) {
                if (lang === this.$i18n.locale) return
                document.cookie = `locale=${lang}`;
                location.reload()
            }
        }
    }
</script>
<style>
</style>

