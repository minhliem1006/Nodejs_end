const express = require('express');
const methodOverride = require('method-override')
const app = express();
const exphbs  = require('express-handlebars');
const path = require ('path');
const route = require ('./routes/index');
const db = require('./config/db/index');
const port = 3000;
db.connect();
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true })); // parse >> json
app.engine('.hbs', exphbs({extname: '.hbs', helpers: {
  sum: (a,b)=> a+b,
}}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})