<template>
	<div>
		<backdrop></backdrop>
		<div :class="showHideSideDrawer">
			<div class="Logo">
				<burger-logo></burger-logo>
			</div>
			<nav>
				<navigation-items></navigation-items>
			</nav>
		</div>
	</div>
</template>
<script>
	import Backdrop from '../UI/Backdrop/Backdrop.vue'
	import { EventBus } from '../../event-bus.js'
	import Logo from '../Logo/Logo.vue'
	import NavigationItems from '../NavigationItems/NavigationItems.vue'

	export default {
		components: {
			'backdrop': Backdrop,
			'burger-logo': Logo,
			'navigation-items': NavigationItems
		},
		data() {
			return {
				showSideDrawer: false,
				attachedClasses: [],
			}
		},
		created() {

			// get value from event bus to check the condition for open or close
			EventBus.$on('show-side-drawer', showSideDrawer => {
				this.showSideDrawer = showSideDrawer
			})
		},
		computed: {
			showHideSideDrawer() {
				if (this.showSideDrawer) {
					return 'SideDrawer Open'
				} else {
					return 'SideDrawer Close'
				}
			}
		}
	}
</script>
<style scoped>
.SideDrawer {
	position: fixed;
	width: 280px;
	max-width: 70%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 200;
	background-color: white;
	padding: 32px 16px;
	box-sizing: border-box;
	transition: transform 0.3s ease-out;
}

@media (min-width: 500px) {
	.SideDrawer {
		display: none;
	}
}

.Open {
	transform: translateX(0);
}

.Close {
	transform: translateX(-100%);
}

.Logo {
	height: 33%;
	margin-bottom: -80px;
}
</style>

