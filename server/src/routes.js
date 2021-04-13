const AuthController = require("./controllers/AuthController")
const AuthPolicy = require("./policies/AuthPolicy.js")

module.exports = (app) =>{
    app.post('/users', 
    AuthPolicy.register,
    AuthController.register)

    app.post('/login', 
    AuthController.login)
}