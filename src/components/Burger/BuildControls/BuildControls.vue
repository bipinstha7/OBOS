<template>
	<div class="BuildControls">
		<p>Current Price:
			<strong>Rs. {{this.$store.state.totalPrice}}</strong>
		</p>
		<div v-for="control in controls" :key="control.type">
			<build-control :type="control.type" :isDisabled="disableLessButton[control.type]"></build-control>
		</div>
		<button class="OrderButton" :disabled="disableOrderButton" @click="showBackDropAndModal">ORDER NOW</button>
	</div>
</template>
<script>
	import BuildControl from './BuildControl/BuildControl.vue'
	import { mapActions } from 'vuex'
	import { EventBus } from '../../../event-bus.js'
	export default {
		name: 'BuildControls',
		components: {
			'build-control': BuildControl
		},
		data() {
			return {
				controls: [
					{ label: 'Salad', type: 'salad' },
					{ label: 'Cheese', type: 'cheese' },
					{ label: 'Meat', type: 'meat' },
					{ label: 'Bacon', type: 'bacon' },
				]
			}
		},
		computed: {
			disableLessButton() {
				const disabledInfo = {
					...this.$store.state.ingredients
				}

				for (let key in this.$store.state.ingredients) {
					disabledInfo[key] = disabledInfo[key] <= 0; // true or false
				}
				return disabledInfo
			},
			disableOrderButton() {
				let sum = 0
				for (let key in this.$store.state.ingredients) {
					sum += this.$store.state.ingredients[key]
				}

				return sum > 0 ? false : true
			}
		},
		methods: {
			showBackDropAndModal() {
				/* set the true value to event bus so that backdrop opens */
				EventBus.$emit('show-side-drawer', true)
				this.$store.state.purchasing = true
			}
		}
	}
</script>
<style scoped>
.BuildControls {
	width: 100%;
	background: #cf8f2e;
	display: flex;
	flex-flow: column;
	align-items: center;
	box-shadow: 0 2px 1px #ccc;
	margin: auto;
	padding: 10px 0;
}

.OrderButton {
	background-color: #dad735;
	outline: none;
	cursor: pointer;
	border: 1px solid #966909;
	color: #966909;
	font-family: inherit;
	font-size: 1.2em;
	padding: 15px 30px;
	box-shadow: 2px 2px 2px #966909;
}

.OrderButton:hover,
.OrderButton:active {
	background-color: #a0db41;
	border: 1px solid #966909;
	color: #966909;
}

.OrderButton:disabled {
	background-color: #c7c6c6;
	cursor: not-allowed;
	border: 1px solid #ccc;
	color: #888888;
}

/* .OrderButton:not(:disabled) {
  animation: enable 0.3s linear;
} */

@keyframes enable {
	0% {
		transform: scale(1);
	}
	60% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}
</style>

