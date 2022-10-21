const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const categoriesData = require('./data/categoryData.json')
app.get('/', (req, res) =>{
    res.send('hello world!, i am goint to create a server for my application')
})


app.get('/category', (req, res) =>{
    res.send(categoriesData)
})

app.listen(port, ()=>{
    console.log(`Runnig port : ${port}`)
})