import Vue from 'vue'
import Router from 'vue-router'
import Order from './route/order.vue'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/order',
			name: 'order',
			component: Order,
		},
	],
})
