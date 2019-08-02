const express=require('express')
const app=express()
const {db,sequelize}=require('./db')

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/add',(req,res)=>{
    res.render('add')
})

app.post('/add',(req,res)=>{
    db.create({
        idNo:req.body.idNo,
        head:req.body.head,
        date:req.body.date,
        info:req.body.info
    }).then(()=>{
        res.redirect('https://google.com')
    })
})

db.sync().then(()=>{
    app.listen(4742,()=>{
        console.log('connecteds')
    })
})

module.exports={
    app
}