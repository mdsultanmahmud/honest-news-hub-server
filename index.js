const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const categoriesData = require('./data/categoryData.json')
const news = require('./data/news.json')

app.get('/', (req, res) =>{
    res.send('hello world!, i am goint to create a server for my application')
})


app.get('/category', (req, res) =>{
    res.send(categoriesData)
})

app.get('/news/:id', (req, res) =>{
    const id = req.params.id
        const singleNews = news.find(ns => ns._id == id)
        res.send(singleNews)
})


app.get('/category/:id', (req, res) =>{
    const id = req.params.id 
    if(id === '08'){
        res.send(news)
    }
    const categories = news.filter(cat => cat.category_id === id)
    res.send(categories)
})

app.get('/news', (req, res) =>{
    res.send(news)
})

app.listen(port, ()=>{
    console.log(`Runnig port : ${port}`)
})