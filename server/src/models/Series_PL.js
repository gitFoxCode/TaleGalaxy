module.exports = (sequelize, DataTypes) => {
    const SeriesPL = sequelize.define('SeriesPL', {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    }, {
        timestamps: false 
    })

    return SeriesPL
}