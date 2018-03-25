import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
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

Vue.http.options.root = 'http://localhost:8000'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();

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
