var app = require('./app');
require('dotenv').config({silent: true});
//const mongoHelper = require('./helpers/mongoHelper')

// Our server is listening on port 8000 using express framework
app.listen(process.env.PORT || 8000, () => {
    console.log(`Example app listening on port! ${process.env.PORT || 8000} `)
});

// Connect to our DB
//mongoHelper.connect()