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
        message: 'Created Successfully',
        result: result
    }))
    .catch(result => {
        res.status(500).json({
            message: 'Can Not Store Ordered Ingredients. Something Bad Happened',
            err: err
        })
    })
})

// Find one Ingredient
router.get('/:id', (req, res) => {
    Ingredients.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => {
        res.status(404).json({
            message: 'No Ingredients Found Of Given Id',
            err: err
        })
    })
})

// update ordered ingredients
router.put('/:id', (req, res) => {
    Ingredients.findByIdAndUpdate(req.params.id, req.body.payload)
    .then(result => res.send({
        message: 'Updated Successfully',
        result: result
    }))
    .catch(err => {
        res.status(500).json({
            message: 'Can Not Update Ordered Ingredients. Something Bad Happened',
            err: err
        })
    })
})

// Delete ordered Ingredients
router.delete('/:id', (req, res) => {
    Ingredients.findByIdAndDelete(req.params.id)
    .then(result => res.send({
        message: 'Deleted Successfully',
        result: result
    }))
    .catch(err => {
        res.status(500).json({
            message: 'Can Not Delete Ordered Ingredients. Something Bad Happened',
            err: err
        })
    })
})