const { Op } = require('sequelize');
const { Series, SeriesPL, SeriesENG } = require('../models')
const translations = {"PL": SeriesPL, "ENG": SeriesENG}

module.exports = {
    async Search (req, res){
        try{
            let series = null
            const search = req.query.search
            const sort = req.query.sort
            const limit = req.query.limit || 10
            const page = req.query.page
            let order = ""
            let orderSeriesLang = ""
            //const order = sort ? sortSeries(sort) : null
            if(sort == 'asc'){
                orderSeriesLang = sort ? sortSeries(sort) : null
            }else{
                order = sort ? sortSeries(sort) : null
            }
            const offset = page ? (page-1)*limit : null
            const translation = req.query.lang ? translations[req.query.lang.toUpperCase()] : SeriesENG // Translation
            if(!translation){
               // console.log(translation);
                res.status(404).send({
                    error: `There is no such language in the database. (${req.query.lang})`
                })
            }
            if(search) {
                series = await Series.findAll({
                    limit,
                    offset,
                    order,
                    include: [{
                        model: translation,
                        where: {
                            [Op.or]: ['title', 'description'].map((key)=>({
                                [key]: {
                                    [Op.like]: `%${search}%`
                                }
                            }))
                        },
                        order: orderSeriesLang,
                        attributes: { exclude: ['SeriesId', 'id'] },
                        required: true
                    }],
                    
                 }).then((results)=>{
                    let lang = req.query.lang ? req.query.lang.toUpperCase() : "ENG"
                    console.log(results)
                    results = results.map((result)=>{
                        return {
                            id: result.id,
                            title: result[`Series${lang}`].title,
                            description: result[`Series${lang}`].description,
                            station: result.station,
                            rate: result.rate,
                            src: result.src,
                            thumb: result.thumb,
                            dubbing: result.dubbing.toLowerCase().replaceAll(' ','').split(','),
                            pegi: result.pegi,
                            available: result.available,
                            createdAt: result.createdAt,
                            updatedAt: result.updatedAt

                        }
                    })
                    return results
                }).catch(err=>{
                    console.error(err);
                })
            } else {
                series = await Series.findAll({
                    limit,
                    offset,
                    order,
                    include: [{
                        model: translation,
                        attributes: { exclude: ['SeriesId'] },
                        order: orderSeriesLang,
                        required: true
                    }]
                }).then((results)=>{
                    let lang = req.query.lang ? req.query.lang.toUpperCase() : "ENG"
                    console.log(results)
                    results = results.map((result)=>{
                        return {
                            id: result.id,
                            title: result[`Series${lang}`].title,
                            description: result[`Series${lang}`].description,
                            station: result.station,
                            rate: result.rate,
                            src: result.src,
                            thumb: result.thumb,
                            dubbing: result.dubbing.toLowerCase().replaceAll(' ','').split(','),
                            pegi: result.pegi,
                            available: result.available,
                            createdAt: result.createdAt,
                            updatedAt: result.updatedAt

                        }
                    })
                    return results
                }).catch(err=>{
                    console.error(err);
                })
            }
            res.send(series);
        } catch(err){
            console.error("Wystąpił błąd", err)
            res.status(500).send({
                error: "Wystąpił błąd " + err
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
                msg: "Seria dodana"
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