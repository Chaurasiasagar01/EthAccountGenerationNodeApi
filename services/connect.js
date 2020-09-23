const mongoose = require('mongoose');
const db = require('../config/dbConf');

class dbConnect {
    connect() {
        mongoose.connect(db.dbURL, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
            console.log("MongoDB connected successfully");
        }).catch(Err => {
            console.log(Err);
        });
    }
}


module.exports = dbConnect;