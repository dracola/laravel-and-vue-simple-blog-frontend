export default function (Vue) {
    let authenticatedUser = {}

    Vue.auth = {

        setToken(token, expiration) {
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
        },

        getToken() {
            let token = localStorage.getItem('token');
            let expiration = localStorage.getItem('expiration');

            if ( ! token || ! expiration) {
                return null
            }

            if (Date.now() > parseInt(expiration)) {
                this.destroyToken();
                return null
            } else {
                return token
            }
        },

        isAuthenticated() {
            return !!this.getToken();
        },

        destroyToken() {
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },

        setAuthenticatedUser(data) {
            authenticatedUser = data
        },

		getAuthenticatedUser() {
        	return authenticatedUser
		}
    }

	Object.defineProperties(Vue.prototype, {
		$auth: {
			get() {
				return Vue.auth
			}
		}
	})
}
