const express = require('express')
const app = express()
const port = 3000

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: '1-hello', message: 'TODO - LIST', 
  	todoList: [
  		'Go to market',
  		'Cooking rice',
  		'Washing dishes',
  		'Learing at coderX-Tokyo'
  	]
   })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

