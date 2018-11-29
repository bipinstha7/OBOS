const Ingredients = require('../models/ingredients')

const express = require('express')
const router = express.Router()

// find all
router.get('/', (req, res) => {
    Ingredients.find()
    .then(result => res.send(result))
    .catch(err => {
        res.status(404).json({
            message: 'No Ingredients Found',
            err: err
        })
    })
})

// post or store ordered ingredients
router.post('/', (req, res) => {
    Ingredients.create(req.body.payload)
    .then(result => res.send({
        message: 'Created Successfully'
    }))
    .catch(result => {
        res.status(500).json({
            message: 'Can Not Store Ordered Ingredients. Something Bad Happened',
            err: err
        })
    })
})