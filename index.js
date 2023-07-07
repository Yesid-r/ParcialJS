'use strict'

const express  = require('express')
const path = require('path')
const route = require('./routes/index')

//Init
const app = express()
app.use(express.static(path.join(__dirname,'public')))


//Settings


app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
//Middlewares
app.use(express.urlencoded({extended:false}))
//Routes

app.use('/' ,route)
//start server

app.listen(app.get('port'),() =>{
    console.log(`server listen at port ${app.get('port')}`)
})