const express = require('express');
const sequelize = require("./config/connection.js")
const session = require("express-session");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
const {User,Pet,Group} = require('./models');
const routes = require("./controllers");

// Sets up the Express app to handle data parsing

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 2
     }
  }))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes)

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});