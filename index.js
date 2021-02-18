let express = require('express');
let app = express();

// Set Public Static Folder
app.use(express.static(__dirname +'/public'));

// Use View Engine
let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Define your routes here
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:page', (req, res) => {
    let banners = {
        blog: 'Our Blog',
        cart: 'Shopping Cart',
        category: 'Shop Category',
        checkout: 'Product Checkout',
        confirmation: 'Confirmation',
        contact: 'Shop Contact',
        index: '',
        login: 'Login',
        register: 'Register',


    };
    let page = req.params.page;
    res.render(page, { banner: banners[page]});
});


// Set Server Port & Start Server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});