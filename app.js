const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/js'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");
// hbs.registerHelper('manulist', ['home', 'about', 'contact', 'services', 'blogs']);
// app.set('views', path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    // how to pass dynamic data in node js. 
    res.render('home', {
        addData: {
            author: 'Janith Kasun',
            image: '',
            comments: ["super", "nice"]
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/services', (req, res) => {
    res.render('services');
});

// use public folder static files 
app.get('/blog', (req, res) => {
    res.render('blog');
});


app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`app is running on localhost:${PORT}`);
});
