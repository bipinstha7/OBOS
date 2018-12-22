const express = require('express')
const app = express()
const mongoose = require('mongoose')

const ingredientsRouter = require('./routes/ingredients')

// connect to mongodb/mlab
mongoose
	.connect('mongodb://obos:obos1212@ds119024.mlab.com:19024/obos',  {useNewUrlParser: true })
	.then(() => console.log('mongodb/mlab connected'))
	.catch(err => console.log('Error connecting mongodb/mlab:', err))

// Express bodyparser
app.use(express.json())

// set static folder
app.use(express.static(__dirname + "/dist"));

// CORS
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

// Route
app.use('/ingredients', ingredientsRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`server is running on port ${port}`)
})
