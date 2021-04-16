const Joi = require("joi");



module.exports = {
    register (req, res, next){
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().min(3).max(100)
        })
        const { error,value } = schema.validate(req.body)

        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address!",
                        input: error.details[0].context.key
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error: "Password must be 3-100 length",
                        input: error.details[0].context.key
                    })
                    break;
                default:
                    res.status(400).send({
                        error: "Invalid registration information."
                    })
            }
        }else{
            next()
        }
    }
}