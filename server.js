const express=require('express')
const app=express()
const {db,sequelize}=require('./db')

app.use(express.static('public'))
app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    db.findAll().then((data)=>{
        res.render('index',{data})
    }).catch(err=>{
        console.log(err)
    })
})

app.get('/add',(req,res)=>{
    res.render('add')
})

app.get('/read',(req,res)=>{
    db.findAll().then((data)=>{
        const k=data;
        console.log(k)
    })
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
    app.listen(3000,()=>{
        console.log('connected')
    })
})

module.exports={
    app
}