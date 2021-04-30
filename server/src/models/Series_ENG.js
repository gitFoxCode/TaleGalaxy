module.exports = (sequelize, DataTypes) => {
    const SeriesENG = sequelize.define('SeriesENG', {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    }, {
        timestamps: false 
    })

    return SeriesENG
}