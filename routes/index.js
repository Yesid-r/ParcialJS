const express = require('express');

const router = express.Router()

const data = require('../resources/files/Marvel.json')
// console.log(`tamaño de data: ${data}`)

let peliculasObject = new Map(Object.entries(data))
let peliculas = new Map()
peliculasObject.forEach((v,k)=>{

    peliculas = new Map(Object.entries(v))

})

// console.log(`tamaño de peliculas: ${peliculas.size}`)	

console.log(`tamaño de peliculas: ${peliculas.size}`)

router.get('/', (req, res) => {
    
    res.render('index', {title: 'Inicio', peliculas: peliculas})
    // res.send('Hola mundo')

    }
)

router.get('/delete/:id', (req, res) => {
    let id = req.params.id
    console.log(`id: ${id}`)
    
    let pos = peliculas.forEach((v,k) => {
    if(v.movie_id == id){
        // console.log(`pos: ${pos}`)
        // 
        console.log(`desea eliminar: ${k}`)
        peliculas.delete(k)
    }
    })
    
    // res.send(` desea eliminar: ${id}`)
    // peliculas.delete(id)
    res.redirect('/')
    }
)

module.exports = router