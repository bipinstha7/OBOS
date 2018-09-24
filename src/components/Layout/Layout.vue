<template>
    <div>
        <burger-toolbar></burger-toolbar>
    </div>
</template>
<script>
    import Toolbar from '../Toolbar/Toolbar.vue'

    export default {
        name: 'Layout',
        components: {
            'burger-toolbar': Toolbar
        },
    }
</script>