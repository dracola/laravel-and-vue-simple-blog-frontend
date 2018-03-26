import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import VeeValidate from 'vee-validate'
// import axios from 'axios'
import VueResource from 'vue-resource'
import VueAxios from 'vue-axios'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import Router from './routes.js'
import Auth from './packages/Auth.js'

Vue.use(BootstrapVue)
// Vue.use(VueAxios, axios)
Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VeeValidate)

Vue.http.options.root = 'http://localhost:8000'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();
// Expect that always there is files
Vue.http.headers.common['Content-Type'] = 'multipart/form-data'

Vue.http.interceptors.push((request, next) => {
    next(response => {
        if (response.status === 404) {
            swal(response.status.toString(), response.body.error, "error")
        } else if (response.status === 500) {
            swal(response.status.toString(), "Sorry!, The system is down, go back later", "error")
        }

    })
})

Router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.guest)) {
            if (Vue.auth.isAuthenticated()) {
                next({
                    path: '/posts'
                })
            } else {
                next()
            }
        } else {
            next()
        }

        if (to.matched.some(record => record.meta.auth)) {
            if (!Vue.auth.isAuthenticated()) {
                next({
                    path: '/login'
                })
            } else {
                next()
            }
        } else {
            next()
        }
    }
)


new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
})
