<template>
	<div>
		<burger-builder></burger-builder>
	</div>
</template>

<script>
	import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder.vue'

	export default {
		components: {
			'burger-builder': BurgerBuilder
		},
	}
</script>
