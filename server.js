const express=require('express')
const app=express()
const sequelize=require('sequelize')

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000)