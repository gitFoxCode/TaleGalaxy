const {
    sequelize,
    Series,
    SeriesPL,
    SeriesENG,
    User
} = require('../src/models')

const users = require('./users.json')
const series = require('./series.json')

/* Translations */
const series_pl = require('./series_pl.json')
const series_eng = require('./series_eng.json')

sequelize.sync({force: true}).then(async function (){
    await Promise.all(
        users.map(user => {
            User.create(user)
        })
    )

    await Promise.all(
        series.map(serie => {
            Series.create(serie)
        })
    )

    await Promise.all(
        series_pl.map(serie_pl => {
            SeriesPL.create(serie_pl)
        })
    )

    await Promise.all(
        series_eng.map(series_eng => {
            SeriesENG.create(series_eng)
        })
    )

})