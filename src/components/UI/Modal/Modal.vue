<template>
    <div>
		<backdrop></backdrop>
		<div class="Modal" :style="transform">
			<h3>Your Order</h3>
        	<p>A delicious burger with the following ingredients:</p>
			<table>
				<thead>
					<th>Ingredient</th>
					<th>Quantity</th>
					<th>Price</th>
				</thead>
				<tbody>
					<tr v-for="ingredient in Object.entries(this.$store.state.ingredients)" :key="ingredient.key">
            			<td>{{ingredient[0]}}</td>
						<td>{{ingredient[1]}}</td>
						<td>{{ingredientPrice[ingredient[0]] * ingredient[1]}}</td>
					</tr>
				</tbody>
			</table>
				<!-- <li v-for="ingredient in Object.entries(this.$store.state.ingredients)" :key="ingredient.key">
            		{{ingredient[0]}}: {{ingredient[1]}}
        		</li>
			</ul> -->
			<p>
				<strong>Total Price: {{this.$store.state.totalPrice}}</strong>
			</p>
			<p>Continue to Checkout?</p>
			<Button class="Danger" @click=purchaseCanceled>CANCEL</Button>
			<Button class="Success" @click=purchaseContinued>CONTINUE</Button>
		</div>
	</div>
</template>
<script>
import Backdrop from '../Backdrop/Backdrop.vue'
import { EventBus } from "../../../event-bus.js"
export default {
	name: "Modal",
	components: {
		'backdrop': Backdrop
	},
	data() {
		return {
			ingredientPrice: this.$store.state.INGREDIENT_PRICES
		}
	},
	computed: {
		transform() {
			if (this.$store.state.purchasing) {
				return 'transform: translateY(0); opacity: 1;'
			} else {
				return 'transform: translateY(-100vh); opacity: 0;'
			}
		},
	},
	methods: {
		purchaseCanceled() {
			EventBus.$emit('show-side-drawer', false)
			this.$store.state.purchasing = false
		},
		purchaseContinued() {
			alert('Work needs to be done in next project')
		}
	}
}
</script>
<style scoped>
.Modal {
	position: fixed;
	z-index: 500;
	background-color: white;
	width: 70%;
	border: 1px solid #ccc;
	box-shadow: 1px 1px 1px black;
	padding: 16px;
	left: 15%;
	top: 30%;
	box-sizing: border-box;
	transition: all 0.3s ease-out;
}

@media (min-width: 600px) {
	.Modal {
		width: 500px;
		left: calc(50% - 250px);
	}
}

Button {
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
}

Button:first-of-type {
  margin-left: 0;
  padding-left: 0;
}

.Success {
  color: #5C9210;
}

.Danger {
  color: #944317;
}
</style>

