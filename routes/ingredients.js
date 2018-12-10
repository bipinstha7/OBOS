const Ingredients = require('../models/ingredients')
const Joi = require('joi')

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

    const emailSchema = Joi.object().keys({
        email: Joi.string().email({ minDomainAtoms: 2 })
    })
    const result = Joi.validate({ email: req.body.payload.email }, emailSchema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
        return
    }
            
    const { salad, cheese, meat, bacon } = req.body.payload.ingredients
    const { salad: saladPrice, cheese: cheesePrice, meat: meatPrice, bacon: baconPrice } = req.body.payload.price

    const ingredients = {
        'salad.total': salad,
        'salad.price': saladPrice,
        'cheese.total': cheese,
        'cheese.price': cheesePrice,
        'meat.total': meat,
        'meat.price': meatPrice,
        'bacon.total': bacon,
        'bacon.price': baconPrice,
        ordered_by: req.body.payload.email,
        total_price: req.body.payload.totalPrice
    }

    console.log('ingredients', ingredients)
    Ingredients.create(ingredients)
    .then(result => res.send({
        message: 'Created Successfully',
        result: result
    }))
    .catch(err => {
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
    let {salad, cheese, meat, bacon} = req.body.ingredients
    let payload = {
        'salad.total': salad,
        'cheese.total': cheese,
        'meat.total': meat,
        'bacon.total': bacon,
        email: req.body.email
    }
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

module.exports = router