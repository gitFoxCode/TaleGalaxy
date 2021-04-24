module.exports = (sequelize, DataTypes) => {
    const Episode = sequelize.define('Episode', {
        video: DataTypes.STRING,
        thumb: DataTypes.STRING,
        season: DataTypes.INTEGER,
        episode: DataTypes.INTEGER,
        dubbing: DataTypes.STRING,
        rate: DataTypes.DOUBLE,
        time: DataTypes.STRING // Time?
    }, {
        tableName: 'episodes'
    })

    Episode.associate = function (models) {
        Episode.belongsTo(models.Series)
    }

    return Episode
}