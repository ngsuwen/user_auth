const express = require('express');
const app = express();
require('dotenv').config();
const apiController = require('./controller/apiController')
const viewController = require('./controller/viewController')

// CONNECT TO MONGOOSE
const mongoose = require('mongoose')

const PORT = process.env.PORT;
const DATABASE = process.env.DATABASE;
const MONGO_BASE_URL = process.env.MONGO_BASE_URL;
const MONGO_URL = `${MONGO_BASE_URL}/${DATABASE}?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL).then(() => {
    console.log('connected')
    app.listen(PORT, () => { console.log('listening at PORT:', PORT) })
})

//------------------API-------------------------
app.use(express.json())
app.use('/api', apiController)

//------------------MPA-------------------------
app.use(viewController)