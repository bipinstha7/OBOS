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
            salad: 0.5,
            cheese: 0.4,
            meat: 1.3,
            bacon: 0.7
        },
        totalPrice: 4,
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
        },
        removePriceAndIngredients(state, payload) {
            state.ingredients[payload] -= 1
        }
    },

    actions: {
        addPriceAndIngredients({commit}, payload) {
            commit('addPriceAndIngredients', payload)
        },
        removePriceAndIngredients({commit}, payload) {
            commit('removePriceAndIngredients', payload)
        }
    }


})