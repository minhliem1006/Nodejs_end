const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require ('path');
const port = 3000;


app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
  })
app.get('/courses', (req, res) => {
    res.render('courses');
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})