module.exports = (sequelize, DataTypes) => {
    const Series = sequelize.define('Series', {
        station: {
            type: DataTypes.STRING
        },
        rate: {
            type: DataTypes.DOUBLE,
            defaultValue: 5
        },
        src: {
            type: DataTypes.STRING
        },
        thumb: {
            type: DataTypes.STRING
        },
        dubbing: {
            type: DataTypes.STRING
        },
        pegi: {
            type: DataTypes.INTEGER
        },
        available: {
            type: DataTypes.BOOLEAN
        }
    }, {
       // tableName: 'series',
        timestamps: false
    })

    Series.associate = function (models) {
        Series.hasOne(models.SeriesPL)
    }

    return Series
}