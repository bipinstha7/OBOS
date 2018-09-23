7<template>
    <header class="Toolbar">
		<drawer-toggle></drawer-toggle>
		<burger-logo class="Logo"></burger-logo>
		<nav class="DesktopOnly">
			<navigation-items></navigation-items>
		</nav>
    </header>
</template>
<script>
import DrawerToggle from '../DrawerToggle/DrawerToggle.vue'
import Logo from '../Logo/Logo.vue'
import NavigationItems from '../NavigationItems/NavigationItems.vue'
export default {
	name: 'Toolbar',
	components: {
		'drawer-toggle': DrawerToggle,
		'burger-logo': Logo,
		'navigation-items': NavigationItems
	}	
}
</script>

<style scoped lang="scss">
.Toolbar {
	height: 56px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: #703b09;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
	z-index: 90;
}

.Toolbar nav {
  	height: 100%;
}

.Logo {
 	 height: 80%;
}

@media (max-width: 499px) {
	.DesktopOnly{
		display: none;
	}
}
</style>