const { User, Episode, Series } = require('../models')

module.exports = {
    async Show (req, res){
        try{
            let count = null;
            switch (req.query.module){
                case 'users':
                    console.log("usersy");
                    count = await User.count({});
                    console.log(count);
                    break;
                case 'episodes':
                    count = await Episode.count();
                    break;
                case 'series':
                    count = await Series.count();
                    break;
                default:
                    res.status(404).send({
                        error: `There is no such module as ${req.query.module}`
                    })
                    break;
            }
            if(count || count == 0){
                res.send({
                    module: req.query.module,
                    count
                });
            }else{
                res.status(500).send({
                    error: "An error occurred during counting"
                })
            }
            
        } catch(err){
            res.status(500).send({
                error: "Wystąpił błąd: " + err
            })
        }
    }

}
