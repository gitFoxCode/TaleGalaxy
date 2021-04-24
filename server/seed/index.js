const {
    sequelize,
    Series,
    SeriesPL,
    User
} = require('../src/models')

const users = require('./users.json')
const series = require('./series.json')
const series_pl = require('./series_pl.json')

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
})