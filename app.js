const path = require('path');

const express = require('express');

const userRoutes = require('./routes/users');
const db = require('./data/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/images', express.static('images')); // this makes the folder visible to the browser
// the '/images' before the middleware(filter) makes it so that only requests that have '/images' will 
// use this middle ware and remove the /images from the incoming request path

app.use(userRoutes);

db.connectToDatabase().then(function () {
  app.listen(3000);
});
