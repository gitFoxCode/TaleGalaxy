const { users } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user){
    const ONE_WEEK = 60*60*24*7;
    return jwt.sign(user, config.auth.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}
module.exports = {
    async register (req, res){
        try{
            const user = await User.create(req.body)
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err){
            res.status(400).send({
                error: `Ten e-mail już istnieje! ${err}`
            })
        }
    },
    async login (req, res){
        try{
            const { email,password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if(!user){
                return res.status(403).send({
                    error: "The login information was incorrect"
                })
            }

            const isPasswordValid = await user.comparePassword(password)

            if(!isPasswordValid){
                return res.status(403).send({
                    error: "The login information was incorrect"
                })
            }
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })

        } catch (err){
            res.status(500).send({
                error: `An error has occured trying to log in.`
            })
        }
    }
}