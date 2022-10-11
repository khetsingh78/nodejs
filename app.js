const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
// app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper('manulist', ['home', 'about', 'contact', 'services', 'blogs']);
// app.set('views', path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(3000, () => {
    console.log(`app is running on localhost:3000`);
});
