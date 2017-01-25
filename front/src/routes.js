import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Feed from './components/Feed.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: "/login",
			component: Login,
			meta: {
				forVisitors: true
			}
		},
		
		{
			path: "/register",
			component: Register,
			meta: {
				forVisitors: true
			}
		},

		{
			path: "/feed",
			component: Feed,
			meta: {
				forAuth: true
			}
		}
	],

	linkActiveClass: 'active',

	mode: 'history'
})

 export default router