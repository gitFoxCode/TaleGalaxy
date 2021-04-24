module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        comment: DataTypes.STRING,
    }, {
        tableName: 'comments'
    })

    Comment.associate = function (models) {
        Comment.belongsTo(models.User)
        Comment.belongsTo(models.Episode)
    }

    return Comment
}

