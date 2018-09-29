<template>
    <div @click="ToggleSideDrawer" class="DrawerToggle">
        <div></div>
        <div></div>
        <div></div>
    </div> 
</template>
<script>
import { EventBus } from "../../../event-bus.js"
export default {
    data() {
        return {
            showSideDrawer: false
        }
    },

    methods: {
        ToggleSideDrawer() {
            // set The value from the event bus so that toggle works
            EventBus.$on('show-side-drawer', showSideDrawer => {
                this.showSideDrawer = showSideDrawer
            })

            this.showSideDrawer = !this.showSideDrawer

            // emit the value to event bus
            EventBus.$emit('show-side-drawer', this.showSideDrawer)
        }
    }
}


</script>

<style scoped>
.DrawerToggle {
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
}

.DrawerToggle div {
    width: 90%;
    height: 3px;
    background-color: white;
}

@media (min-width: 500px) {
  .DrawerToggle {
      display: none;
  }
}

</style>

