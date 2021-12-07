const express = require('express');
const session = require("express-session");
const seedData = require('./seedData')
const userController = require('./controller/userController')
const viewController = require('./controller/viewController')
const sessionController = require('./controller/sessionController')
const methodOverride = require("method-override");
const app = express();
require('dotenv').config();

// CONNECT TO MONGOOSE
const mongoose = require('mongoose');
const { urlencoded } = require('express');

const PORT = process.env.PORT;
const DATABASE = process.env.DATABASE;
const MONGO_BASE_URL = process.env.MONGO_BASE_URL;
const MONGO_URL = `${MONGO_BASE_URL}/${DATABASE}?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL).then(async () => {
    console.log('connected')
    await seedData();
    console.log('data seeded')
    app.listen(PORT, () => { console.log('listening at PORT:', PORT) })
})

app.use(express.json())
app.use(express.urlencoded())
app.use(methodOverride("_method"));

app.use(
    session({
        secret: process.env.SECRET,
        saveUninitialized: false,
        resave: false
    })
);

app.use(sessionController)

//check if there is valid session
app.use((req, res, next) => {
    console.log(req.session)
    if (req.session.user) {
        next()
    } else {
        res.redirect('/login')
    }
})

app.use(userController)
app.use(viewController)