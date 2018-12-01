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
			<small v-if="error" class="error">{{error}}</small>
			<label for="email" class="email">
				<input type="text" id="email" required v-model="email">
				<span class="label">Enter Your Email </span>
				<span class="border"></span>
			</label>
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
			ingredientPrice: this.$store.state.INGREDIENT_PRICES,
			email: '',
			error: '',
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
			let instance = this
			const emailSchema = Joi.object().keys({
				email: Joi.string().email({ minDomainAtoms: 2 })
			})
			const result = Joi.validate({ email: this.email }, emailSchema);
			if (result.error) {
				if (!this.email) {
					return this.error = "You must enter your email address"
				} else {
					return this.error = "Invalid email address"
				}
			}
			axios.post(`${BASE_URL}/ingredients`, {
				payload: {
					ingredients: this.$store.state.ingredients,
					price: this.$store.state.INGREDIENT_PRICES,
					totalPrice: this.$store.state.totalPrice,
					email: instance.email
				}
			})
			.then(result => console.log('result', result))
			.catch(err => this.error = err.response.data)
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

.error {
	color: red;
}

* {
	box-sizing: border-box;
}	
.email {
	position: relative;
	margin: auto;
	width: 100%;
	max-width: 280px;
}
.email .label {
	position: absolute;
	top: 40px;
	left: 0;
	font-size: 16px;
	color: #9098a9;
	font-weight: 500;
	transform-origin: 0 0;
	transition: all 0.2s ease;
}
.email .border {
	position: absolute;
	bottom: -17px;
	left: 0;
	height: 2px;
	width: 100%;
	background: #07f;
	transform: scaleX(0);
	transform-origin: 0 0;
	transition: all 0.15s ease;
}
.email input {
	-webkit-appearance: none;
	width: 100%;
	border: 0;
	font-family: inherit;
	padding: 12px 0;
	height: 48px;
	font-size: 16px;
	font-weight: 500;
	border-bottom: 2px solid #c8ccd4;
	background: none;
	border-radius: 0;
	color: #223254;
	transition: all 0.15s ease;
}
.email input:hover {
  	background: rgba(34,50,84,0.03);
}
.email input:not(:placeholder-shown) + span {
	color: #5a667f;
	transform: translateY(-26px) scale(0.75);
}
.email input:focus {
	background: none;
	outline: none;
}
.email input:focus + span, 
.email input:valid + span {
	color: #07f;
	transform: translateY(-56px) scale(0.75);
}
.email input:focus + span + .border {
	transform: scaleX(1);
}

</style>
