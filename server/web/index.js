const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')


app.listen(8080, () => console.log('server is up'))

app.get('/', (req,res)=>{

	res.render('index.pug')
})

