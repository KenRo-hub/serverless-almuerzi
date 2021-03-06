const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const meals = require ('./routes/Meals')
const orders = require ('./routes/Orders')

const app = express();
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  } );

app.use('/api/meals', meals);
app.use('/api/orders', orders)

module.exports = app;