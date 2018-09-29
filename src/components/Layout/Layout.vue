<template>
    <div>
        <burger-toolbar></burger-toolbar>
        <side-drawer></side-drawer>
        <main class="Content">
            <slot></slot>
        </main>
    </div>
</template>
<script>
    import Toolbar from '../Toolbar/Toolbar.vue'
    import SideDrawer from '../SideDrawer/SideDrawer.vue'

    export default {
        name: 'Layout',
        components: {
            'burger-toolbar': Toolbar,
            'side-drawer': SideDrawer
        },
    }
</script>
<style scoped>
.Content {
    margin-top: 72px;
}
</style>
