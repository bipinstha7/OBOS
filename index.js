const express = require('express')
const app = express()
const mongoose = require('mongoose')

const ingredientsRouter = require('./routes/ingredients')

// connect to mongodb/mlab
mongoose
	.connect('mongodb://obos:obos1212@ds119024.mlab.com:19024/obos')
	.then(() => console.log('mongodb/mlab connected'))
	.catch(err => console.log('Error connecting mongodb/mlab:', err))


app.use('/ingredients', ingredientsRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`server is running on port ${port}`)
})
