<template>
	<div class="container mt-4">
		<!-- <div v-if="error">{{error}}</div> -->
		<div class="lds-dual-ring" v-if="loadingData"></div>
		<div v-else>
			<h4 class="jumbotron">Orders</h4>
			<table class="table table-striped">
				<thead class="thead-dark">
					<tr>
						<th class="column3"> Email </th>
						<th class="column3"> Salad </th>
						<th class="column3"> Cheese </th>
						<th class="column3"> Meat </th>
						<th class="column3"> Bacon </th>
						<th class="column6"> Total Amount </th>
						<th class="column6"> Edit / Delete </th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="order in orders" :key="order._id">
						<td>{{order.ordered_by}}</td>
						<td>{{order.salad.total}}</td>
						<td>{{order.cheese.total}}</td>
						<td>{{order.meat.total}}</td>
						<td>{{order.bacon.total}}</td>
						<td>{{order.total_price}}</td>
						<td>
							<router-link to="/edit">
								<span class="badge badge-warning" @click="editOrder(order._id)">edit</span>
							</router-link>
							<span class="badge badge-danger" @click="deleteOrder(order._id)">delete</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	import { EventBus } from "../event-bus.js"
	export default {
		data() {
			return {
				loadingData: true,
				orders: [],
				error: ''
			}
		},
		created() {
			let instance = this
			axios.get(`${BASE_URL}/ingredients`)
				.then(result => {
					// EventBus.$emit('show-side-drawer', false)
					instance.orders = result.data
					instance.loadingData = false
				})
				.catch(err => {
					console.log('Error on fetching data', err)
					instance.error = 'Error on fetching data. Please check your connection.'
					instance.loadingData = false
				})
		},
		methods: {
			deleteOrder(id) {
				// show some kind of model before deleting the order
				axios.delete(`ingredients/${id}`)
					.then(result => res.status(200).send({
						message: 'Order Deleted Successfully',
						result: result
					}))
					.catch(err => res.status(500).send({
						message: 'Can not delete your order. Something bad happened',
						err: err
					}))
			}
		}
	}
</script>
<style scoped>
.lds-dual-ring {
	display: inline-block;
	width: 64px;
	height: 64px;
	margin: 25% 50%;
}
.lds-dual-ring:after {
	content: " ";
	display: block;
	width: 46px;
	height: 46px;
	margin: 1px;
	border-radius: 50%;
	border: 5px solid #000;
	border-color: #000 transparent #000 transparent;
	animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>


