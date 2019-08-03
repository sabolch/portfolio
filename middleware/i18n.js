import {cookieFromRequest, replaceUrl} from '~/utils'

export default function ({isHMR, app, store, req, route, params, error, redirect}) {
    const defaultLocale = app.i18n.fallbackLocale
    // If middleware is called from hot module replacement, ignore it
    if (isHMR) {
        return
    }
    // get cookie from request
    const cookieLocale = cookieFromRequest(req, 'locale')
    // check if locale cookie is set
    if (cookieLocale) {
        app.i18n.locale = cookieLocale
        redirect(replaceUrl(route.fullPath, cookieLocale))
    } else {
        // Get locale from params
        const locale = params.lang || defaultLocale
        // check if lang is defined
        if (!store.state.locales.includes(locale)) {
            return error({message: 'This page could not be found.', statusCode: 404})
        }
        // check if state is not set
        if (locale !== store.state.locale) {
            store.commit('SET_LANG', locale)
        } // runs on first call but :( the cookie not set needs future update

        app.i18n.locale = store.state.locale
    }
}
