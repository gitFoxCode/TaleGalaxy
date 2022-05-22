const AuthController = require("./controllers/AuthController")
const AuthPolicy = require("./policies/AuthPolicy.js")
const SeriesController = require("./controllers/SeriesController")
const CountController = require("./controllers/CountController")
const UsersController = require("./controllers/UsersController")

module.exports = (app) =>{
    app.post('/users', 
    AuthPolicy.register,
    AuthController.register)

    app.post('/login', 
    AuthController.login)

    app.get('/series',
    SeriesController.Search)

    app.get('/series/:id',
    SeriesController.Show)

    app.patch('/series/:id',
    SeriesController.Edit)

    app.delete('/series/:id',
    SeriesController.Delete)

    app.post('/series',
    SeriesController.addSeries)

    app.get('/count',
    CountController.Show)

    app.get('/users',
    UsersController.GetUsers)
}