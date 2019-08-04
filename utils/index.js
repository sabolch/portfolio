/**
 * Get cookie from request.
 *
 * @param  {Object} req
 * @param  {String} key
 * @return {String|undefined}
 */
export function cookieFromRequest(req, key) {
    if(!req){
        return
    }

    if (!req.headers.cookie) {
        return
    }

    const cookie = req.headers.cookie.split(';').find(
        c => c.trim().startsWith(`${key}=`)
    )

    if (cookie) {
        return cookie.split('=')[1]
    }
}

/**
 *
 * @param url
 * @param locale
 * @returns {string}
 */
export function replaceUrl(url, locale) {
    let urlArray = url.split('/')
    locale = locale === 'en' ? '' : locale
    if (urlArray[1].length === 2) {
        if (locale.length === 0) {
            urlArray.splice(1, 1);
            return urlArray.join('/')
        }
        urlArray[1] = locale;
        return urlArray.join('/')
    } else {
        if (locale.length === 2) {
            urlArray.splice(1, 0, locale);
        }
        return urlArray.join('/')
    }
}
