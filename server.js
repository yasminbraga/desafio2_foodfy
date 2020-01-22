const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("home", {recipes})
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipes", function(req, res) {
    return res.render("recipes", {recipes})
})

server.get("/recipe/:index", function(req, res) {
    const recipeIndex = req.params.index
    const recipe = recipes[recipeIndex]
    
    return res.render("recipe", {recipe})
})



server.listen(5000, function() {
    console.log("server is running")
})