const { User } = require('../models')

module.exports = {
    async GetUsers (req, res){
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] }
            })
            res.send(users)
        } catch (error) {
            console.error("Wystąpił błąd!", error)
            res.status(404).send({
                error: `Wystąpił błąd ${error}`
            })
        }
    }
}