const { User, Episode, Series } = require('../models')

module.exports = {
    async Add (req, res){
        try{

            
        } catch(err){
            res.status(500).send({
                error: "Wystąpił błąd " + err
            })
        }
    },
    async Delete (req, res){
        try{

            
        } catch(err){
            res.status(500).send({
                error: "Wystąpił błąd " + err
            })
        }
    },
    async Edit (req, res){
        try{

            
        } catch(err){
            res.status(500).send({
                error: "Wystąpił błąd " + err
            })
        }
    }

}
