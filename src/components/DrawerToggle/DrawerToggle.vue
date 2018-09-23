<template>
    <div @Click="ToggleSideDrawer" class="DrawerToggle">
        <div></div>
        <div></div>
        <div></div>
    </div> 
</template>
<script>
export default {
    data() {
        return {
            showSideDrawer: false
        }
    },

    methods: {
        ToggleSideDrawer() {
            this.showSideDrawer = true
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

