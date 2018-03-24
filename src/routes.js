import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Posts from './components/Posts.vue'

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
			path: '/regiter',
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
		
	]
})

export default router
