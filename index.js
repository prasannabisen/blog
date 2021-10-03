const express = require('express')
const app = express()
const { Sequelize, json } = require('sequelize')

const sequelize = new Sequelize('testdb', 'root', 'root', {
    dialect: 'sqlite',
    storage: './db.sqlite3'
})

const db = sequelize.define('blog', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    catagories: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
app.use(express.static(__dirname + 'public'))
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    let data
    data = db.findAll().then((info)=>{
        res.render('index',{info})
        console.log(info[0])
    })
    console.log("welcome welcome welcome")
})

app.get('/new', async (req, res) => {
    try {
        await sequelize.authenticate().then(() => { console.log("tested") })
            .catch(err => { console.log(err) })
        console.log("new blog page")
        res.render('new')
    }
    catch (error) {
        console.log(error)
    }
})

app.post('/new', (req, res) => {
    // data.push({
    //     'title':req.body.title,
    //     'catagories':req.body.catagories,
    //     "content":req.body.content
    // })
    console.log("post post")
    const newBlog = {
        title: req.body.title,
        catagories: req.body.catagories,
        content: req.body.content
    }
    db.create(newBlog).then(() => { console.log("created") })
    res.redirect('/')
})

db.sync().then(() => {
    app.listen(3000, () => {
        console.log("connected connected")
    })
})