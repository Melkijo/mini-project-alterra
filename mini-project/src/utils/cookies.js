import cookies from 'js-cookie'


export function setAuthCookie(token) {
    cookies.set('auth_token', token, {
        expires: 7, // 7 days
    })
}

export function getAuthCookie() {
    const token = cookies.get('auth_token')
    return token
}

export function removeAuthCookie() {
    cookies.remove('auth_token')
}
