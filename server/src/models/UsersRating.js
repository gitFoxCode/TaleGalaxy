module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('users_rating', {
        rate: {
            type: DataTypes.DOUBLE
        }
    }, {
        timestamps: false
    })

    Rating.associate = function (models) {
        Rating.belongsTo(models.Series)
        Rating.belongsTo(models.User)
        Rating.belongsTo(models.Episode, {
            foreignKey: {
              defaultValue: 0
            }
        })
    }

    return Rating
}