const Sequelize=require('sequelize')

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'show.db'
})

const db=sequelize.define('show',{
    idNo:{
        type:Sequelize.INTEGER
    },
    head:{
        type:Sequelize.CHAR
    },
    date:{
        type:Sequelize.DATE
    },
    info:{
        type:Sequelize.CHAR
    }
})

module.exports={
    db,
    sequelize
}