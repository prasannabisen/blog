const express=require('express')
const app=express()
const {db,sequelize}=require('./db')

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.render('index')
})

module.exports={
    app
}

db.sync().then(()=>{
    app.listen(3000)
})