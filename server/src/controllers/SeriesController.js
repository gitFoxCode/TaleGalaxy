const { Op } = require('sequelize');
const { Series, SeriesPL } = require('../models')

module.exports = {
    async Search (req, res){
        try{
            let series = null
            const search = req.query.search
            const sort = req.query.sort
            const limit = req.query.limit || 10
            const page = req.query.page
            const order = sort ? sortSeries(sort) : null
            const offset = page ? (page-1)*limit : null
            if(search) {
                series = await Series.findAll({
                    include: [{model: SeriesPL, as: 'Seriesxd'}],
                    attributes: { exclude: ['SeriesId'] },
                    where: {
                        [Op.or]: ['title', 'description'].map((key)=>({
                            [key]: {
                                [Op.like]: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                series = await Series.findAll({
                    limit,
                    offset,
                    order,
                    include: [{
                        model: SeriesPL, //"translation_PL",
                        attributes: { exclude: ['SeriesId'] },
                        required: true
                    }]
                })
            }
            res.send(series);
        } catch(err){
            res.status(500).send({
                error: "Zesrało sie xd " + err
            })
        }
    },

    async Delete (req, res){
        try{
            if(req.params.id){
                let seriesId = req.params.id;
                SeriesPL.destroy({
                    where: {
                        seriesId: seriesId
                    }
                })
                Series.destroy({
                    where: {
                        id: seriesId
                    }
                })
                res.send(req.body)
            }else{
                res.status(404).send({
                    error: "Not specified series id: series/{id}"
                })
            }
        } catch (err){
            res.status(500).send({
                error: "An error has occured trying to get all series"
            })
        }
    },

    async Edit (req, res){
        try{
            if(req.params.id){
                let seriesId = req.params.id;
                delete req.body.seriesId;

                if(req.body.lang){
                    await SeriesPL.update(req.body, {
                        where: {
                            seriesId: seriesId
                        }
                    })
                    res.send(req.body)
                }else{
                    await Series.update(req.body, {
                        where: {
                            id: seriesId
                        }
                    })
                    res.send(req.body)
                }
            }else{
                res.status(404).send({
                    error: "Not specified series id: series/{id}"
                })
            }
        } catch (err){
            res.status(500).send({
                error: "An error has occured trying to edit series"
            })
        }
    },

    async Show (req, res){
        try{
            if(req.params.id){
                if(req.query.lang){
                    const series = await Series.findByPk(req.params.id)
                    const lang = await SeriesPL.findOne({
                        where: { seriesId: req.params.id }
                    })
                    const seriesLang = Object.assign({},lang.dataValues,series.dataValues)
                    res.send(seriesLang)
                } else{
                    const series = await Series.findByPk(req.params.id)
                    res.send(series)
                }
            }else{
                res.status(404).send({
                    error: "Not specified series id: series/{id}"
                })
            }
        } catch (err){
            res.status(500).send({
                error: "An error has occured trying to show series" + err
            })
        }
    },

    async addSeries (req, res){
        try{
            const series = await Series.create(req.body)
            req.body.SeriesId = series.dataValues.id
            const seriesPL = await SeriesPL.create(req.body)
            //console.log(series,seriesPL);
            console.log("[*] SERIA DODANA!!")
            res.status(200).send({
                msg: "Seria dodana byku"
            });
        } catch (err){
            res.status(500).send({
                //console.log(err);
                error: "An error has occured trying to send new series" + err
            })
        }
    }
}

function sortSeries(value){
    let order = null;
    switch (value){
        case 'rate':
            order = [['rate', 'DESC']]
            break;
        case 'new':
            order = [['updatedAt', 'DESC']]
            break;
        case 'asc':
            order = [['title', 'DESC']]
            break;
        case 'old':
            order = [['updatedAt', 'ASC']]
            break;
        default:
            break;
    }
   
    return  order//[['name', 'DESC']]
}