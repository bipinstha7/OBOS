<template>
	<div class="hello">
		<burger-toolbar></burger-toolbar>
		
		<h1>{{ msg }}</h1>
		<p>
			This app is on building phase
		</p>
		<h2 class="make-branch">Always make respective branch and work on it</h2>
	</div>
</template>

<script>
import Toolbar from './Toolbar/Toolbar.vue'
export default {
	name: 'HelloWorld',
	components: {
		'burger-toolbar': Toolbar,
	},
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.make-branch {
	color: blue;
	background: yellow;
}
</style>
