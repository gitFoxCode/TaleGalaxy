const bcrypt = require("bcryptjs")

async function hashPassword(user, options){
    if(!user.changed("password")){
        return;
    }

    const SALT_FACTOR = 8; 

    return bcrypt.genSalt(SALT_FACTOR)
        .then(salt => bcrypt.hash(user.password, salt, null))
        .then(hash => {
            user.setDataValue("password", hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
          type: DataTypes.STRING,
          unique: true
        },
        password: DataTypes.STRING
    },{
        hooks: {
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function (password){
        return bcrypt.compare(password, this.password)
    }

    return User
}