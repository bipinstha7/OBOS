<template>
	<div class="hello">
		<burger-toolbar></burger-toolbar>
		<!-- <navigation-items></navigation-items> -->
		
		<h1>{{ msg }}</h1>
		<p>
			This app is on building phase
		</p>
	</div>
</template>

<script>
import Toolbar from './Toolbar/Toolbar.vue'
import NavigationItems from './NavigationItems/NavigationItems.vue'
export default {
	name: 'HelloWorld',
	components: {
		'burger-toolbar': Toolbar,
		'navigation-items': NavigationItems
	},
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
