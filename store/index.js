// import Cookies from 'js-cookie'
// import {cookieFromRequest} from '~/utils'

// export const actions = {
//
//   nuxtServerInit({commit}, {req}) {
//     // const locale = cookieFromRequest(req, 'locale')
//     // if (locale) {
//     //   commit('SET_LANG', locale)
//     // }
//   },
//
//   nuxtClientInit({commit}) {
//     // const locale = Cookies.get('locale')
//     // if (locale) {
//     //   commit('SET_LANG', locale)
//     // }
//   }
// }



export const state = () => ({
  locales: ['en', 'hu','ua'],
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
