const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {  
    console.log(`server is running on port: ${PORT}`)
})