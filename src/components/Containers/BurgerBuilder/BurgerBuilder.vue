<template>
    <div>
        <!-- <modal show={{purchasing}}>

        </modal> -->
        <burger></burger>
        <build-controls></build-controls>
    </div>
</template>
<script>
import Modal from "../../UI/Modal/Modal.vue"
import Burger from "../../Burger/Burger.vue"
import BuildControls from '../../Burger/BuildControls/BuildControls.vue'
export default {
    name: 'BurgerBuilder',
    components: {
        'modal': Modal,
        'burger': Burger,
        'build-controls': BuildControls
    },
    data() {
        return {
            purchasable: false,
            purchasing: false,
        }
    }
}
</script>

