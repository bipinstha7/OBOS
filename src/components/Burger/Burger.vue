<template>
    <div class="Burger">
        <burger-ingredients type="bread-top"></burger-ingredients>
        <div v-if="transformedIngredients.length ">
            <div v-for="(ingred, key) in transformedIngredients" :key="key">
                <burger-ingredients :type="ingred"></burger-ingredients>
            </div>
        </div>
        <p v-else>Please Start Adding Ingredients</p>
        <burger-ingredients type="bread-bottom"></burger-ingredients>
    </div>
</template>
<script>
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients.vue"
export default {
    name: 'Burger',
    props: {
        ingredients: Object
    },
    components: {
        'burger-ingredients': BurgerIngredients
    },
    data() {
        return {
            transformedIngredients: []
        }
    },
    created() {
        // ingredients props is an object and we can't map objects. We can map arrays but not object
        // So we need to convert the given object in to an array
        // Object.keys() extracts keys of a given object and turns that in to an array - [salad, bacon, cheese ,meat]
        // this.transformedIngredients = Object.keys(this.ingredients).map(ingredientKey => {
        //     return ingredientKey
        // })

        Object.entries(this.ingredients).map(ingredient => {
            if (ingredient[1] > 0) return this.transformedIngredients.push(ingredient[0])
        })
    }
}
</script>

<style scoped>
.Burger {
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
}

@media (min-width: 500px) and (max-height: 400px) {
    .Burger {
        width: 350px;
        height: 300px;
    }
}

@media (min-width: 500px) and (min-height: 401px) {
    .Burger {
        width: 450px;
        height: 400px;
    }
}

@media (min-width: 1000px) and (min-height: 700px) {
    .Burger {
        width: 700px;
        height: 600px;
    }
}
</style>
