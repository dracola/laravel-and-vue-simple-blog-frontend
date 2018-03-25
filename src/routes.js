import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Posts from './components/Posts.vue'
import CreatePost from './components/posts/Create.vue'
import EditPost from './components/posts/Edit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login,
            meta: {
                guest: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                guest: true
            }
        },
        {
            path: '/posts',
            component: Posts,
            meta: {
                auth: true
            }
        },
        {
            path: '/posts/create',
            component: CreatePost,
            meta: {
                auth: true
            }
        },
        {
            path: '/posts/:id/edit',
            component: EditPost,
            meta: {
                auth: true
            }
        },

    ],
    linkActiveClass: 'active',
    mode: 'history'
})

export default router
