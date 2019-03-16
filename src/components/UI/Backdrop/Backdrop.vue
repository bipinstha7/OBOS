<template>
    <div class="Backdrop" @click="closeSideDrawer" v-if="showSideDrawer"></div>
</template>
<script>
import { EventBus } from "../../../event-bus.js"
export default {
    data() {
        return {
            showSideDrawer: false,
        }
    },
    created() {
        // get value from event bus to check the condition for backdrop
        EventBus.$on('show-side-drawer', showSideDrawer => {
            this.showSideDrawer = showSideDrawer
        })
    },
    methods: {
        closeSideDrawer() {
            // set the false value to event bus so that backdrop closes
            EventBus.$emit('show-side-drawer', false)
            this.$store.state.purchasing = false
        }
    }
}
</script>
<style scoped>
.Backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
}
</style>


