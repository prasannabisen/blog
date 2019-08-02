const express=require('express')
const app=express()
const {db,sequelize}=require('./db')
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index')
})

db.sync().then(()=>{
    app.listen(3000)
})