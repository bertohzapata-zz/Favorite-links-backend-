const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
    // Handlebars settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev')); //dev/combined/tiny
app.use(express.urlencoded({extended: false}));

// Global variables


// Routes
app.use(require('./routes'));


// Public

// Starting server
app.listen(app.get('port'), () => {
    console.log('\x1b[35m', 'Server online on port', app.get('port'));
    /* console.log('\x1b[36m', 'Database online'); */
});