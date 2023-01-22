const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require("path");

const connectDB = require('./server/database/connection');
const Employes = require('./server/model/model');

const app = express();

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

//load routes

app.use('/', require('./server/routes/routes'));


app.listen(3000, () => { console.log(`server is running on http://localhost:${3000}`) });

