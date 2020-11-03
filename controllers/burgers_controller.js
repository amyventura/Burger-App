const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function (req, res){
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res){
    burger.all(function(data){
        res.render("index", {burger_data : data});
    });
});

router.post("/burgers/create", function (req, res){
    burger.create(req.body.burger_name, function(data){
        res.redirect("/");
    });
});

router.put("/burgers:id", function (req, res){
    burger.update(req.params.id, function(data){
        res.sendStatus(200);
    });
});

module.exports = router;
