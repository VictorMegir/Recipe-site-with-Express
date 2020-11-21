const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const pageRouter = require('./routes/pageRoutes');
const recipeRouter = require('./routes/recipeRoutes');

const app = express();
dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(() => {
        app.listen(3000);
        console.log("Connected to MongoDB");
    })
    .catch((error) => console.log(`DB Connection Error: ${error.message}`));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use('/recipes', recipeRouter);
app.use('', pageRouter);