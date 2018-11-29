const Ingredients = require('../models/ingredients')

const express = require('express')
const router = express.Router()

// find all
router.get('/', (req, res) => {
    Ingredients.find()
    .then(result => res.send(result))
    .catch(err => {
        res.status(404).json({
            message: 'No ingredients found',
            err: err
        })
    })
})

