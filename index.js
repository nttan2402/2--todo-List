const express = require('express')
const app = express()
const port = 3000

var todos = [
  		'Go to market',
  		'nấu cơm',
  		'Washing dishes',
  		'Learing at coderX-Tokyo'
  	]
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/todos', function (req, res) {
  res.render('index', { title: '1-hello', message: 'TODO - LIST', 
  	todoList: todos
   })
});

app.get('/todos', function (req, res) {
 	var q = req.query.q;
 	var matchedActive = todos.filter(function(active){
 		return  active.indexOf(q) !== -1;
 	});
 	res.render('index', {title: '3-Query Parameters', message: 'TODO - LIST',
 		search: q,
 		todoList: matchedActive
 	});
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

