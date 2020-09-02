const mongoose = require('mongoose');
require('dotenv').config({silent: true});

exports.connect = () => {
    if(process.env.DB_URI) {

        const options = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            tls: true,
            //tlsCAFile: `./797cf5ae-4027-11e9-a020-42025ffb08c8`,
            useUnifiedTopology: true 
        };

        //Set up default mongoose connection
        var mongoDB = process.env.DB_URI
        mongoose.set('useFindAndModify', false);
        mongoose.set('useUnifiedTopology', true);

        mongoose.connect(mongoDB, options).then(() => {
            console.log("DB Connected")
        }).catch((error) => {
            console.error("DB connection error", error)
        })

        //Get the default connection
        var db = mongoose.connection;

        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    }
}

