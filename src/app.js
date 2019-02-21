const express = require('express');
const morgan = require('morgan');

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev')); //dev/combined/tiny

// Global variables


// Routes


// Public

// Starting server
app.listen(app.get('port'), () => {
    console.log('\x1b[35m', 'Server online on port', app.get('port'));
    /* console.log('\x1b[36m', 'Database online'); */
});