const mongoose = require('mongoose');

const db_uri = process.env.DB_URI;

function connectToDb(){
    mongoose.connect(db_uri)
    .then(()=>{
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}

module.exports = connectToDb;