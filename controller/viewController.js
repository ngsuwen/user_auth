const express = require('express')
const router = express.Router()
const checkIsAdmin = require('../middlewares/checkIsAdmin')
const checkIsUser = require('../middlewares/checkIsUser')

router.get("/", (req, res) => {
    res.render("index.ejs", user = req.session.user);
});

router.get('/login', (req, res) => {
    res.render('login.ejs')
})  

router.get("/new", checkIsAdmin, (req, res) => {
    res.render("new.ejs");
});

router.get("/userpage", checkIsUser, (req, res) => {
    res.render("user.ejs");
});

module.exports = router
