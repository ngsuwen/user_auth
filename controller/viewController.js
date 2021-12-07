const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.ejs", user=req.session.user);
});

router.get("/new", (req, res) => {
    res.render("new.ejs");
});

module.exports = router
