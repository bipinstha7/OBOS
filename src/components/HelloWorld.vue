<template>
	<div class="hello">
		<burger-toolbar></burger-toolbar>
		<!-- <backdrop></backdrop> -->
		<!-- <navigation-items></navigation-items> -->
		
		<h1>{{ msg }}</h1>
		<p>
			This app is on building phase
		</p>
		<h1 class="do-it-always">While doing on different components or bugs or features.</h1>
		<h2 class="make-branch">Always make respective branch and work on it</h2>
	</div>
</template>

<script>
import Toolbar from './Toolbar/Toolbar.vue'
import NavigationItems from './NavigationItems/NavigationItems.vue'
import Backdrop from './UI/Backdrop/Backdrop.vue'
export default {
	name: 'HelloWorld',
	components: {
		'burger-toolbar': Toolbar,
		'navigation-items': NavigationItems,
		'backdrop': Backdrop
	},
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.do-it-always {
	color: white;
	background: black;
}

.make-branch {
	color: blue;
	background: yellow;
}
</style>
