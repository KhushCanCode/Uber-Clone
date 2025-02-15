const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const cors = require('cors');

const app  = express();

const cookieParser = require('cookie-parser');

const connectToDb = require('./db/db');

const userRoutes = require('./routes/user.route');
const captainRoutes = require('./routes/captain.route')



connectToDb();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send('Server is Live...');
})
app.use('/users', userRoutes);
app.use('/captain', captainRoutes)
module.exports = app;