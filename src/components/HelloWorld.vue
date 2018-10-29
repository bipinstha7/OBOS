<template>
	<div class="hello">
		<!-- <burger-ingredients></burger-ingredients> -->
		
		<!-- <h1>{{ msg }}</h1>
		<p>
			This app is on building phase
		</p>
		<h2 class="make-branch">Always make respective branch and work on it</h2> -->
	</div>
</template>

<script>
import BurgerIngredients from './Burger/BurgerIngredients/BurgerIngredients.vue'
export default {
	name: 'HelloWorld',
	components: {
		'burger-ingredients': BurgerIngredients,
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
