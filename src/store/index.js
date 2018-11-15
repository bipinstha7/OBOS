import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        INGREDIENT_PRICES: {
            salad: 10,
            cheese: 20,
            meat: 30,
            bacon: 40
        },
        totalPrice: 20,
        purchasing: false,
    },

    getters: {
        getIngredients(state) {
            return state.ingredients
        },
        getIngredientsPrice(state) {
            return state.INGREDIENT_PRICES
        },
        getTotalPrice(state) {
            return state.totalPrice
        }
    },

    mutations: {
        addPriceAndIngredients(state, payload) {
            state.ingredients[payload] += 1
            state.totalPrice += state.INGREDIENT_PRICES[payload]
        },
        removePriceAndIngredients(state, payload) {
            state.ingredients[payload] -= 1
            state.totalPrice -= state.INGREDIENT_PRICES[payload]
        },
    },

    actions: {
        addPriceAndIngredients({commit}, payload) {
            commit('addPriceAndIngredients', payload)
        },
        removePriceAndIngredients({commit}, payload) {
            commit('removePriceAndIngredients', payload)
        },
    }


})