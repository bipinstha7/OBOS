<template>
    <div id="app">
        <div id="nav">
        </div>   
        <burger-layout>
            <router-view/>
        </burger-layout>
    </div>
</template>
<script>
    import Layout from './components/Layout/Layout.vue'
    export default {
        components: {
            'burger-layout': Layout
        }
    }
</script>



<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
