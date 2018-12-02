<template>
    <div id="app">
        <div id="nav">
            <!-- <router-link to="/">Home</router-link> | -->
            <!-- <router-link to="/about">About</router-link> -->
        </div>
        <router-view/>
        <burger-layout>
            <burger-builder></burger-builder>
            <!-- <burger></burger> -->
        </burger-layout>
    </div>
</template>
<script>
    import Layout from './components/Layout/Layout.vue'
    // import Burger from './components/Burger/Burger.vue'
    import BurgerBuilder from './components/Containers/BurgerBuilder/BurgerBuilder.vue'

    export default {
        components: {
            'burger-layout': Layout,
            // 'burger': Burger,
            'burger-builder': BurgerBuilder
        }
    }
</script>


<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;

    // components would get the router-link-active class when the path is selected
    .router-link-exact-active {
        color: #42b983;
    }
}
html, body {
    height: 100%;
    padding: 0;
    margin: 0
}
</style>
