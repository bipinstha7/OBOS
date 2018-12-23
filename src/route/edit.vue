<template>
    <div>
        <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
            </div>
        </div>
        <div class="form-group row">
            <label for="Salad" class="col-sm-2 col-form-label">Salad</label>
            <div class="col-sm-10">
            <input type="number" class="form-control" id="Salad" placeholder="Password" v-model="ingredients.salad">
            </div>
        </div>
		 <div class="form-group row">
            <label for="cheese" class="col-sm-2 col-form-label">Cheese</label>
            <div class="col-sm-10">
            <input type="number" class="form-control" id="cheese" placeholder="cheese" v-model="ingredients.cheese">
            </div>
        </div>
        <div class="form-group row">
            <label for="meat" class="col-sm-2 col-form-label">Meat</label>
            <div class="col-sm-10">
            <input type="number" class="form-control" id="meat" placeholder="Password" v-model="ingredients.meat">
            </div>
        </div>
		<div class="form-group row">
            <label for="bacon" class="col-sm-2 col-form-label">Bacon</label>
            <div class="col-sm-10">
            <input type="number" class="form-control" id="bacon" placeholder="Password" v-model="ingredients.bacon">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
            <button type="submit" class="btn btn-primary" @click="editOrder">Edit</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ingredients: {
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0
            },
            email: '',
        }
    },
	methods: {
		editOrder() {
			axios.put(`${BASE_URL}/ingredients/${order._id}`, {ingredients, email})
				.then(result => res.send(result))
				.catch(err => {
                    res.send({
                        message: 'Edit Failed.Something Bad Happened',
                        err: err.message
                    })
                })
		}
	}
}
</script>

