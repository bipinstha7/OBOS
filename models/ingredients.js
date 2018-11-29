const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({
    salad: {
        total: {
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            default: 10
        }
    },
    cheese: {
        total: {
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            default: 20
        }
    },
    meat: {
        total: {
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            default: 30
        }
    },
    bacon: {
        total: {
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            default: 40
        }
    },
    totalPrice: {
        type: Number,
        default: 20
    },
    orderedBy: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ingredient', ingredientSchema)