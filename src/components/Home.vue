<template>
	<div>
		<!-- <burger-layout> -->
		<burger-builder></burger-builder>
		<!-- </burger-layout> -->
	</div>
</template>

<script>
	import Layout from './Layout/Layout.vue'
	import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder.vue'

	export default {
		components: {
			'burger-layout': Layout,
			// 'burger': Burger,
			'burger-builder': BurgerBuilder
		},
	}
</script>
