<template>
    <ul class='NavigationItems'>
        <li class="NavigationItem" @click="burgerBuilderClicked">
            <router-link to="/" :class='builderActive'> 
                Burger Builder
            </router-link>
        </li>
        <li class="NavigationItem" @click="checkoutClicked">
            <router-link to="/order" :class='checkoutActive'> 
                Checkout
            </router-link>
        </li>
    </ul>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "NavigationItems",
    data() {
        return {
            builderActive: '',
            checkoutActive: '',
        }
    },
    created() {
        this.builderActive = 'active'
    },
    methods: {
        ...mapActions([
            'clearAllStore',
        ]),
        burgerBuilderClicked() {
            this.builderActive = 'active',
            this.checkoutActive = ''
            this.clearAllStore()
        },
        checkoutClicked() {
            this.checkoutActive = 'active',
            this.builderActive = ''
        },
    },
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

.NavigationItem {
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
}

.NavigationItem a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
}

.NavigationItem a:hover,
.NavigationItem a:active,
.NavigationItem a.active {
    color: #40a4cb;
}

@media (min-width: 500px) {
    .NavigationItem {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }
  
    .NavigationItem a {
        color: #fff;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
    }
  
    .NavigationItem a:hover,
    .NavigationItem a:active,
    .NavigationItem a.active {
        background: #8f5c2c;
        border-bottom: 4px solid #40a4cb;
        color: #fff;
    }
}
</style>

