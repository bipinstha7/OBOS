<template>
    <div>
        <!-- <modal show={{purchasing}}>

        </modal> -->
        <burger :ingredients=ingredients></burger>
    </div>
</template>
<script>
import Modal from "../../UI/Modal/Modal.vue"
import Burger from "../../Burger/Burger.vue"
export default {
    name: 'BurgerBuilder',
    components: {
        'modal': Modal,
        'burger': Burger
    },
    data() {
        return {
            ingredient_prices: {
                salad: 0.5,
                cheese: 0.4,
                meat: 1.3,
                bacon: 0.7
            },
            ingredients: {
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
        }
    }
}
</script>

