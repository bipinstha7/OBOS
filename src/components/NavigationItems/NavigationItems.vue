<template>
    <ul class='NavigationItems'>
        <navigation-item>Burger Builder</navigation-item>

        <!-- The named slot stays to that slot area where it gets called and the unnamed slot(Burger Builder) takes the next slot area other than named slot area -->
        <navigation-item >Checkout</navigation-item>
    </ul>
</template>
<script>
import NavigationItem from './NavigationItem/NavigationItem.vue'
export default {
    components: {
        'navigation-item': NavigationItem
    }
}
</script>

<style lang="scss" scoped>
.NavigationItems {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
}

@media (min-width: 500px) {
    .NavigationItems {
        flex-flow: row;
    }
} 
</style>

